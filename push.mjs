import { execSync } from 'child_process';
const token = process.env.GITHUB_TOKEN;
const remote = `https://gabby-maze:${token}@github.com/gabby-maze/Mindsystem.git`;
try {
  execSync(`git remote remove origin`, {stdio:'inherit'}).toString();
} catch(e) {}
execSync(`git remote add origin ${remote}`, {stdio:'inherit'});
execSync('git push -u origin master', {stdio:'inherit'});
console.log('Push complete!');
