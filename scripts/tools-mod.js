import fs from 'fs';
import path from 'path';

const filePath = path.resolve('dist/bin/letterboxd-export.mjs');

let content = fs.readFileSync(filePath, 'utf-8');

// Fix import to main library
content = content.replace(/\.\.\/src(\/index\.js)?/g, './../index.mjs');
content = content.replace(/\.\.\/src\/dto\/global/g, './../index.mjs');
content = content.replace(/\.\.\/src\/types/g, './../index.mjs');

// Fix import to package.json
content = content.replace(/\.\.\/package\.json/g, './../package.json');

fs.writeFileSync(filePath, content, 'utf-8');

console.log(`Import references in ${filePath} fixed successfully.`);
