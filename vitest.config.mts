import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 20000,
    hookTimeout: 20000,
    clearMocks: false,
    globalSetup: ['tests/global-setup.ts'],
    setupFiles: ['tests/setup.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: [...configDefaults.exclude, 'demo.ts', '**/*.polyfill.ts', 'vars.ts', 'server.ts']
    }
  }
});
