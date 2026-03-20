import { readFileSync } from 'fs';
import { distPackage } from 'rolldown-plugin-dist-package';
import { defineConfig } from 'tsdown';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8')) as { version: string };

const outDir = 'dist';

export default defineConfig([
  // 1. Main Library Configuration (ESM + CJS + DTS)
  {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: outDir,
    sourcemap: true,
    unbundle: true,
    fixedExtension: false,
    plugins: [
      distPackage({
        outDir,
        removeFields: ['packageManager', 'lint-staged', 'devDependencies', 'scripts'],
        copyFiles: ['README.md', 'LICENSE']
      })
    ]
  },
  // 2. Servers & CLI Configuration (ESM, bundled)
  {
    entry: {
      'bin/server': './src/bin/server.ts',
      'bin/mcp-server': './src/bin/mcp-server.ts',
      'bin/export-ratings': './src/bin/export-ratings.ts',
      cli: './src/cli.ts'
    },
    define: {
      __VERSION__: JSON.stringify(version)
    },
    format: ['esm'],
    outDir: outDir,
    clean: false, // Don't clean, otherwise it would delete the library build
    unbundle: true,
    platform: 'node',
    target: 'node22',
    fixedExtension: false,
    minify: false,
    sourcemap: false,
    dts: false,
    banner: {
      js: '#!/usr/bin/env node'
    }
  }
]);
