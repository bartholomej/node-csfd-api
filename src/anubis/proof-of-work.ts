import { sha256, toHex } from './sha256';

// Hard bound on the search so an unexpected difficulty bump can never hang the
// caller. Difficulty 4 takes ~0.1s and difficulty 5 ~2s; past that, failing
// fast beats blocking a server for minutes.
export const DEFAULT_TIME_BUDGET_MS = 10_000;

// ~8ms of hashing per slice, short enough to keep a server's latency sane.
const YIELD_INTERVAL = 4096;

// setImmediate resumes on the next event loop tick; setTimeout is clamped to
// ~1ms but exists everywhere. React Native polyfills the former, browsers not.
// Read off globalThis so this file needs no Node type declarations.
const scheduleImmediate = (globalThis as { setImmediate?: (callback: () => void) => unknown })
  .setImmediate;

const yieldToEventLoop: () => Promise<void> = scheduleImmediate
  ? () => new Promise((resolve) => scheduleImmediate(() => resolve()))
  : () => new Promise((resolve) => setTimeout(() => resolve(), 0));

export interface ProofOfWork {
  hash: string;
  nonce: number;
}

/**
 * Find a nonce whose `sha256(data + nonce)` digest starts with `difficulty`
 * zero nibbles, mirroring Anubis' own worker: whole zero bytes first, then the
 * high nibble of the next byte when difficulty is odd.
 *
 * Resolves `null` if no nonce is found within the time budget.
 */
export const solveProofOfWork = async (
  data: string,
  difficulty: number,
  timeBudgetMs: number = DEFAULT_TIME_BUDGET_MS
): Promise<ProofOfWork | null> => {
  const requiredZeroBytes = Math.floor(difficulty / 2);
  const isDifficultyOdd = difficulty % 2 !== 0;
  const deadline = Date.now() + timeBudgetMs;

  for (let nonce = 0; ; nonce++) {
    // The search runs on the caller's thread, so hand the event loop back at
    // intervals: a server has to stay responsive while we hunt for the nonce.
    if (nonce > 0 && nonce % YIELD_INTERVAL === 0) {
      if (Date.now() > deadline) {
        return null;
      }
      await yieldToEventLoop();
    }

    const digest = sha256(data + nonce);

    let valid = true;
    for (let i = 0; i < requiredZeroBytes; i++) {
      if (digest[i] !== 0) {
        valid = false;
        break;
      }
    }
    if (valid && isDifficultyOdd && digest[requiredZeroBytes] >> 4 !== 0) {
      valid = false;
    }
    if (valid) {
      return { hash: toHex(digest), nonce };
    }
  }
};
