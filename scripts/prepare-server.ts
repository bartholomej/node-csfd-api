import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../server.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Overwrite src → dist
content = content
  .replace(/from '\.\/src'/g, "from './cjs/index.js'")
  .replace(/from '\.\/package.json'/g, "from './version.js'")
  .replace(/from '\.\/src\/dto\/global'/g, "from './types/dto/global'");

fs.writeFileSync(path.resolve(__dirname, '../dist/server.ts'), content);
console.log('server.ts prepared for Docker build ✅');
