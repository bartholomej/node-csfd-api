import { defineConfig } from 'tsdown';
import { copyAndFixPackageJson } from './package-json-fix.rolldown';

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
      copyAndFixPackageJson({
        outDir,
        removeFields: ['packageManager', 'lint-staged', 'devDependencies', 'scripts']
      })
    ]
  },
  // 2. Servers & CLI Configuration (Strictly ESM/MJS)
  {
    entry: {
      'bin/server': './src/bin/server.ts',
      'bin/mcp-server': './src/bin/mcp-server.ts',
      'bin/export-ratings': './src/bin/export-ratings.ts',
      cli: './src/cli.ts'
    },
    format: ['esm'], // This will generate .mjs files
    outDir: outDir,
    clean: false, // Don't clean, otherwise it would delete the library build
    unbundle: true,
    platform: 'node',
    target: 'node18',
    minify: false,
    sourcemap: false,
    dts: false,
    banner: {
      js: '#!/usr/bin/env node'
    }
  }
]);
