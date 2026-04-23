import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { createHash } from 'crypto';

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'gabby-maze';
const REPO = 'maze-members-portal';
const BRANCH = 'main';
const BASE = `https://api.github.com/repos/${OWNER}/${REPO}`;
const ROOT = './artifacts/members-portal';

const headers = {
  'Authorization': `token ${TOKEN}`,
  'Accept': 'application/vnd.github+json',
  'Content-Type': 'application/json',
  'X-GitHub-Api-Version': '2022-11-28'
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function api(path, method = 'GET', body, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const url = path.startsWith('https://') ? path : `${BASE}${path}`;
    const res = await fetch(url, {
      method, headers,
      body: body ? JSON.stringify(body) : undefined
    });
    if (res.status === 403 || res.status === 429) {
      await sleep(30000 * attempt);
      continue;
    }
    if (!res.ok && res.status !== 404 && res.status !== 422) {
      const err = await res.text();
      throw new Error(`GitHub API ${method} ${path} → ${res.status}: ${err}`);
    }
    return { status: res.status, data: res.status === 204 ? null : await res.json() };
  }
}

async function ensureRepo() {
  const check = await api(`/repos/${OWNER}/${REPO}`);
  if (check.status === 404) {
    console.log(`Creating repo ${OWNER}/${REPO}...`);
    await api(`https://api.github.com/user/repos`, 'POST', {
      name: REPO, private: true, auto_init: true, default_branch: BRANCH
    });
    await sleep(3000);
    console.log('Repo created.');
  } else {
    console.log(`Repo ${OWNER}/${REPO} already exists.`);
  }
}

function gitBlobSha(content) {
  const buf = Buffer.isBuffer(content) ? content : Buffer.from(content);
  const header = Buffer.from(`blob ${buf.length}\0`);
  const hash = createHash('sha1');
  hash.update(header);
  hash.update(buf);
  return hash.digest('hex');
}

async function getGitHubTree(treeSha) {
  const res = await api(`/git/trees/${treeSha}?recursive=1`);
  const map = {};
  for (const item of (res.data.tree || [])) {
    if (item.type === 'blob') map[item.path] = item.sha;
  }
  return map;
}

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.cache', 'coverage']);
const SKIP_FILES = new Set(['.DS_Store', 'Thumbs.db']);

function getAllFiles(dir, base = dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_FILES.has(entry)) continue;
    const full = join(dir, entry);
    const rel = relative(base, full);
    if (statSync(full).isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      files.push(...getAllFiles(full, base));
    } else {
      files.push({ full, rel });
    }
  }
  return files;
}

async function pushBlob(content) {
  const buf = Buffer.isBuffer(content) ? content : Buffer.from(content);
  const res = await api('/git/blobs', 'POST', {
    content: buf.toString('base64'),
    encoding: 'base64'
  });
  return res.data.sha;
}

async function run() {
  await ensureRepo();

  // Get current HEAD
  let headSha, treeSha, existingTree = {};
  try {
    const ref = await api(`/git/ref/heads/${BRANCH}`);
    headSha = ref.data.object.sha;
    const commit = await api(`/git/commits/${headSha}`);
    treeSha = commit.data.tree.sha;
    existingTree = await getGitHubTree(treeSha);
    console.log(`Current HEAD: ${headSha}`);
  } catch {
    console.log('Starting fresh branch.');
  }

  const files = getAllFiles(ROOT);
  console.log(`Found ${files.length} files to sync.`);

  const treeItems = [];
  let uploaded = 0;

  for (const { full, rel } of files) {
    const content = readFileSync(full);
    const localSha = gitBlobSha(content);
    if (existingTree[rel] === localSha) continue;

    process.stdout.write(`  Uploading: ${rel} ... `);
    const blobSha = await pushBlob(content);
    treeItems.push({ path: rel, mode: '100644', type: 'blob', sha: blobSha });
    console.log('done');
    uploaded++;
  }

  if (treeItems.length === 0) {
    console.log('Nothing changed. Already up to date.');
    return;
  }

  console.log(`\nUploaded ${uploaded} files. Creating tree...`);
  const newTree = await api('/git/trees', 'POST', {
    base_tree: treeSha,
    tree: treeItems
  });

  const newCommit = await api('/git/commits', 'POST', {
    message: 'Deploy members portal',
    tree: newTree.data.sha,
    parents: headSha ? [headSha] : []
  });

  if (headSha) {
    await api(`/git/refs/heads/${BRANCH}`, 'PATCH', { sha: newCommit.data.sha });
  } else {
    await api(`/git/refs`, 'POST', { ref: `refs/heads/${BRANCH}`, sha: newCommit.data.sha });
  }

  console.log(`\n✅ Pushed to github.com/${OWNER}/${REPO}/tree/${BRANCH}`);
  console.log(`   Netlify will auto-deploy if connected to this repo.`);
}

run().catch(e => { console.error(e); process.exit(1); });
