import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      exclude: [...configDefaults.exclude, 'demo.ts', '**/*.polyfill.ts', 'vars.ts']
    }
  }
});
