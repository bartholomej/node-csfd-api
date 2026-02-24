import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 20000,
    hookTimeout: 20000,
    coverage: {
      provider: 'istanbul',
      exclude: [...configDefaults.exclude, 'demo.ts', '**/*.polyfill.ts', 'vars.ts', 'server.ts']
    }
  }
});
