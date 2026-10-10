// Pure-JS SHA-256 (FIPS 180-4), portable across Node, browsers, ServiceWorkers
// and React Native. `node:crypto` is deliberately avoided: Metro (RN/Expo)
// cannot resolve Node core modules, so importing it would break the entire
// library on RN. WebCrypto is async and unusable in the synchronous PoW loop.

// prettier-ignore
const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);

const rotr = (x: number, n: number): number => (x >>> n) | (x << (32 - n));

const HEX = '0123456789abcdef';

const INITIAL_STATE = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
];

/** Runs the 64-byte block at `offset` through the compression function, updating `state`. */
const compress = (state: Int32Array, message: Uint8Array, offset: number, w: Uint32Array): void => {
  for (let i = 0; i < 16; i++) {
    const j = offset + i * 4;
    w[i] = (message[j] << 24) | (message[j + 1] << 16) | (message[j + 2] << 8) | message[j + 3];
  }
  for (let i = 16; i < 64; i++) {
    const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
    const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
    w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
  }

  let a = state[0];
  let b = state[1];
  let c = state[2];
  let d = state[3];
  let e = state[4];
  let f = state[5];
  let g = state[6];
  let h = state[7];

  for (let i = 0; i < 64; i++) {
    const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
    const ch = (e & f) ^ (~e & g);
    const t1 = (h + S1 + ch + K[i] + w[i]) | 0;
    const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
    const maj = (a & b) ^ (a & c) ^ (b & c);
    const t2 = (S0 + maj) | 0;
    h = g;
    g = f;
    f = e;
    e = (d + t1) | 0;
    d = c;
    c = b;
    b = a;
    a = (t1 + t2) | 0;
  }

  state[0] = (state[0] + a) | 0;
  state[1] = (state[1] + b) | 0;
  state[2] = (state[2] + c) | 0;
  state[3] = (state[3] + d) | 0;
  state[4] = (state[4] + e) | 0;
  state[5] = (state[5] + f) | 0;
  state[6] = (state[6] + g) | 0;
  state[7] = (state[7] + h) | 0;
};

/**
 * SHA-256 of `prefix + suffix` (UTF-8) for many suffixes. The prefix's whole
 * 64-byte blocks are compressed once up front, so each call only pays for the
 * tail. Anubis' 128-byte challenge is exactly two such blocks, which cuts the
 * proof-of-work's hashing to a third.
 */
export const sha256Prefixed = (prefix: string): ((suffix: string) => Uint8Array) => {
  // Created per call so that merely loading the library needs no TextEncoder.
  const encoder = new TextEncoder();
  const prefixBytes = encoder.encode(prefix);
  const blockAligned = prefixBytes.length - (prefixBytes.length % 64);
  const tail = prefixBytes.subarray(blockAligned);
  const w = new Uint32Array(64);

  const midstate = new Int32Array(INITIAL_STATE);
  for (let offset = 0; offset < blockAligned; offset += 64) {
    compress(midstate, prefixBytes, offset, w);
  }

  return (suffix) => {
    const suffixBytes = encoder.encode(suffix);
    const remaining = tail.length + suffixBytes.length;
    const length = prefixBytes.length + suffixBytes.length;

    // Pad: append 0x80, then zeros, then the 64-bit big-endian bit length.
    const total = Math.ceil((remaining + 9) / 64) * 64;
    const message = new Uint8Array(total);
    message.set(tail);
    message.set(suffixBytes, tail.length);
    message[remaining] = 0x80;

    const bitLengthHi = Math.floor(length / 0x20000000); // length * 8 / 2^32
    const bitLengthLo = (length * 8) >>> 0;
    message[total - 8] = (bitLengthHi >>> 24) & 0xff;
    message[total - 7] = (bitLengthHi >>> 16) & 0xff;
    message[total - 6] = (bitLengthHi >>> 8) & 0xff;
    message[total - 5] = bitLengthHi & 0xff;
    message[total - 4] = (bitLengthLo >>> 24) & 0xff;
    message[total - 3] = (bitLengthLo >>> 16) & 0xff;
    message[total - 2] = (bitLengthLo >>> 8) & 0xff;
    message[total - 1] = bitLengthLo & 0xff;

    const state = midstate.slice();
    for (let offset = 0; offset < total; offset += 64) {
      compress(state, message, offset, w);
    }

    const digest = new Uint8Array(32);
    for (let i = 0; i < 8; i++) {
      const v = state[i];
      digest[i * 4] = (v >>> 24) & 0xff;
      digest[i * 4 + 1] = (v >>> 16) & 0xff;
      digest[i * 4 + 2] = (v >>> 8) & 0xff;
      digest[i * 4 + 3] = v & 0xff;
    }
    return digest;
  };
};

/** SHA-256 digest of `text` (UTF-8) as 32 raw bytes. */
export const sha256 = (text: string): Uint8Array => sha256Prefixed('')(text);

export const toHex = (bytes: Uint8Array): string => {
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    hex += HEX[bytes[i] >> 4] + HEX[bytes[i] & 0x0f];
  }
  return hex;
};
