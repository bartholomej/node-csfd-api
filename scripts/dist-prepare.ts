import { copyFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import originalPackage from '../package.json';

// Modify package.json and copy into dist folder
let pkg: Record<string, any> = originalPackage;

pkg.module = './index.js';
pkg.main = './index.js';
pkg.types = './index.d.ts';
delete pkg.devDependencies;
delete pkg.husky;

writeFileSync(join(__dirname, '..', 'dist', 'package.json'), JSON.stringify(pkg, null, 2));
console.log('File package.json modified:', pkg);

// Copy README into dist folder
const copyFiles = ['README.md'];
for (const file of copyFiles) {
  copyFileSync(`./${file}`, `./dist/${file}`);
}
