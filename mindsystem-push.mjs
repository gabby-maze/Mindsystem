import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { createHash } from 'crypto';

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'gabby-maze';
const REPO  = 'Mindsystem';
const BRANCH = 'main';
const BASE  = `https://api.github.com/repos/${OWNER}/${REPO}`;
const ROOT  = './artifacts/mindsystem-home';

const headers = {
  'Authorization': `token ${TOKEN}`,
  'Accept': 'application/vnd.github+json',
  'Content-Type': 'application/json',
  'X-GitHub-Api-Version': '2022-11-28'
};

// Resolved versions from pnpm catalog + real pinned versions
const CATALOG = {
  '@replit/vite-plugin-cartographer':     '^0.5.1',
  '@replit/vite-plugin-dev-banner':       '^0.1.1',
  '@replit/vite-plugin-runtime-error-modal': '^0.0.6',
  '@tailwindcss/vite':     '^4.1.14',
  '@tanstack/react-query': '^5.90.21',
  '@types/node':           '^20.0.0',
  '@types/react':          '^19.2.0',
  '@types/react-dom':      '^19.2.0',
  '@vitejs/plugin-react':  '^5.0.4',
  'class-variance-authority': '^0.7.1',
  'clsx':           '^2.1.1',
  'framer-motion':  '12.35.1',
  'lucide-react':   '0.545.0',
  'react':          '19.1.0',
  'react-dom':      '19.1.0',
  'tailwind-merge': '^3.3.1',
  'tailwindcss':    '^4.1.14',
  'vite':           '^6.3.5',
  'zod':            '^3.25.76',
};

// Transform package.json for standalone npm install on Netlify
function transformPackageJson(raw) {
  const pkg = JSON.parse(raw);
  pkg.name = 'mindsystem-home';

  for (const section of ['dependencies', 'devDependencies', 'peerDependencies']) {
    if (!pkg[section]) continue;
    const next = {};
    for (const [name, ver] of Object.entries(pkg[section])) {
      // Drop workspace-local packages entirely
      if (typeof ver === 'string' && ver.startsWith('workspace:')) continue;
      // Resolve catalog: aliases to real semver
      if (ver === 'catalog:') {
        const resolved = CATALOG[name];
        if (!resolved) {
          console.warn(`  WARNING: no catalog entry for ${name}, skipping`);
          continue;
        }
        next[name] = resolved;
      } else {
        next[name] = ver;
      }
    }
    pkg[section] = next;
  }

  return Buffer.from(JSON.stringify(pkg, null, 2) + '\n');
}

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
    await api(`https://api.github.com/orgs/${OWNER}/repos`, 'POST', {
      name: REPO, private: true, auto_init: true
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

const SKIP_DIRS  = new Set(['node_modules', 'dist', '.git', '.cache', 'coverage', '.replit-artifact']);
const SKIP_FILES = new Set(['.DS_Store', 'Thumbs.db']);

function getAllFiles(dir, base = dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_FILES.has(entry)) continue;
    const full = join(dir, entry);
    const rel  = relative(base, full);
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

  let headSha, treeSha, existingTree = {};
  let usedBranch = BRANCH;

  for (const branch of [BRANCH, 'master']) {
    const ref = await api(`/git/ref/heads/${branch}`);
    if (ref.status !== 404) {
      headSha = ref.data.object.sha;
      usedBranch = branch;
      const commit = await api(`/git/commits/${headSha}`);
      treeSha = commit.data.tree.sha;
      existingTree = await getGitHubTree(treeSha);
      console.log(`Current HEAD on '${usedBranch}': ${headSha}`);
      break;
    }
  }

  if (!headSha) console.log('Starting fresh branch.');

  const files = getAllFiles(ROOT);
  console.log(`Found ${files.length} files to sync.`);

  const treeItems = [];
  let uploaded = 0;

  for (const { full, rel } of files) {
    // Transform package.json for standalone deployment
    const content = rel === 'package.json'
      ? transformPackageJson(readFileSync(full, 'utf8'))
      : readFileSync(full);

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
    message: 'Deploy mindsystem-home',
    tree: newTree.data.sha,
    parents: headSha ? [headSha] : []
  });

  if (headSha) {
    await api(`/git/refs/heads/${usedBranch}`, 'PATCH', { sha: newCommit.data.sha });
  } else {
    await api('/git/refs', 'POST', { ref: `refs/heads/${BRANCH}`, sha: newCommit.data.sha });
  }

  console.log(`\n✅ Pushed to github.com/${OWNER}/${REPO}/tree/${usedBranch}`);
  console.log('   Netlify will auto-deploy if connected to this repo.');
}

run().catch(e => { console.error(e); process.exit(1); });
