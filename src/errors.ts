import { LIB_PREFIX } from './vars';

export type CsfdErrorReason =
  /** An anti-bot challenge stood in the way and could not be passed. */
  | 'blocked'
  /** ČSFD answered 404 — the movie, creator or user does not exist. */
  | 'not-found'
  /** Any other unsuccessful HTTP status. */
  | 'http'
  /** The request never completed: offline, DNS, TLS, timeout. */
  | 'network';

interface CsfdErrorOptions {
  status?: number;
  cause?: unknown;
}

/**
 * Raised when a page cannot be retrieved. `reason` says why, so callers can
 * tell "this movie does not exist" from "ČSFD is refusing us right now" and
 * react differently instead of guessing from a message.
 */
export class CsfdError extends Error {
  readonly reason: CsfdErrorReason;
  readonly url: string;
  /** HTTP status, when the request got far enough to have one. */
  readonly status?: number;

  /** @hidden */
  constructor(reason: CsfdErrorReason, url: string, message: string, options?: CsfdErrorOptions) {
    super(`${LIB_PREFIX} ${message}`, { cause: options?.cause });
    this.name = 'CsfdError';
    this.reason = reason;
    this.url = url;
    this.status = options?.status;
  }
}
