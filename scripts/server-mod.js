import fs from 'fs';
import path from 'path';

const filePath = path.resolve('dist/server.mjs');

let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/\.\/src/g, './index.mjs');

fs.writeFileSync(filePath, content, 'utf-8');

console.log(`Import references in ${filePath} fixed successfully.`);
