import type { TestProject } from 'vitest/node';
import { fetchPage, getAnubisCookie } from '../src/fetchers';

declare module 'vitest' {
  export interface ProvidedContext {
    anubisCookie: string | null;
  }
}

// Each test file gets its own worker and so its own Anubis cookie; solving the
// challenge once here spares every file a proof-of-work of its own.
export default async function setup(project: TestProject) {
  await fetchPage('https://www.csfd.cz/').catch(() => undefined);
  project.provide('anubisCookie', getAnubisCookie());
}
