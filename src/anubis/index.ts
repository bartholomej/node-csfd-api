// Self-contained client for Anubis (BotStopper) proof-of-work challenges.
// Nothing here is ČSFD-specific: it takes a URL, a `fetch` and the interstitial
// it received, so it can be lifted out into its own package as-is.

export { createAnubisClient } from './client';
export type { AnubisClient, AnubisClientOptions } from './client';

export { isAnubisChallenge, passChallenge } from './challenge';
export type { ChallengeResult, FetchLike, PassChallengeParams } from './challenge';

export { DEFAULT_TIME_BUDGET_MS, solveProofOfWork } from './proof-of-work';
export type { ProofOfWork } from './proof-of-work';

export { sha256, toHex } from './sha256';
