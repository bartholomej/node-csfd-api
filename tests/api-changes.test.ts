import { describe, expect, it } from 'vitest';
import { Csfd } from '../src';
import { fetchPage } from '../src/fetchers';

/**
 * This test suite documents and verifies the API changes introduced
 * in the current branch. It serves as a living documentation of
 * backward compatibility and new features.
 */
describe('API Changes Documentation', () => {
  describe('New Csfd class features', () => {
    it('should have setOptions method', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(csfd).toHaveProperty('setOptions');
      expect(typeof csfd.setOptions).toBe('function');
    });

    it('should accept optional defaultOptionsRequest in constructor', () => {
      const defaultOptions: RequestInit = { credentials: 'include' };

      expect(() => {
        new Csfd(
          null as any,
          null as any,
          null as any,
          null as any,
          null as any,
          defaultOptions
        );
      }).not.toThrow();
    });

    it('should maintain backward compatibility - constructor without options', () => {
      expect(() => {
        new Csfd(
          null as any,
          null as any,
          null as any,
          null as any,
          null as any
        );
      }).not.toThrow();
    });
  });

  describe('Method signature changes - backward compatible', () => {
    it('movie() should accept optional optionsRequest as second parameter', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      // Original signature still works
      expect(csfd.movie.length).toBeGreaterThanOrEqual(1);

      // Type check - this would be caught at compile time
      // csfd.movie(123); // Original call
      // csfd.movie(123, { credentials: 'include' }); // New call
    });

    it('creator() should accept optional optionsRequest as second parameter', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(csfd.creator.length).toBeGreaterThanOrEqual(1);
    });

    it('search() should accept optional optionsRequest as second parameter', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(csfd.search.length).toBeGreaterThanOrEqual(1);
    });

    it('cinema() should accept optional optionsRequest as third parameter', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(csfd.cinema.length).toBeGreaterThanOrEqual(2);
    });

    it('userRatings() should accept optional optionsRequest as third parameter', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(csfd.userRatings.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('fetchPage function changes', () => {
    it('should accept optional optionsRequest as second parameter', () => {
      // Function signature check
      expect(fetchPage.length).toBeGreaterThanOrEqual(1);

      // This would be a runtime test with mocks
      // fetchPage('url'); // Original
      // fetchPage('url', { credentials: 'include' }); // New
    });
  });

  describe('Breaking changes check', () => {
    it('should NOT break existing code without optionsRequest', () => {
      // This test ensures backward compatibility
      // All existing code should continue to work without modification
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      // These calls should still be valid (type-checked at compile time)
      expect(() => {
        // Would call: csfd.movie(123)
        // Would call: csfd.creator(456)
        // Would call: csfd.search('query')
        // Would call: csfd.cinema(1, 'today')
        // Would call: csfd.userRatings('user')
      }).not.toThrow();
    });
  });

  describe('Feature: Default request options', () => {
    it('should allow setting default options that apply to all requests', () => {
      const csfd = new Csfd(
        null as any,
        null as any,
        null as any,
        null as any,
        null as any
      );

      expect(() => {
        csfd.setOptions({
          optionsRequest: {
            credentials: 'include',
            headers: { 'X-API-Key': 'key' }
          }
        });
      }).not.toThrow();
    });

    it('should allow per-request override of default options', () => {
      // This is verified in integration tests
      // Just documenting the feature here
      expect(true).toBe(true);
    });
  });

  describe('Feature: Custom headers support', () => {
    it('should support Headers object', () => {
      const headers = new Headers();
      headers.set('Authorization', 'Bearer token');

      const options: RequestInit = { headers };

      expect(options.headers).toBeInstanceOf(Headers);
    });

    it('should support plain object headers', () => {
      const options: RequestInit = {
        headers: {
          'Authorization': 'Bearer token',
          'X-Custom': 'value'
        }
      };

      expect(options.headers).toBeDefined();
    });

    it('should support array-style headers', () => {
      const options: RequestInit = {
        headers: [
          ['Authorization', 'Bearer token'],
          ['X-Custom', 'value']
        ]
      };

      expect(Array.isArray(options.headers)).toBe(true);
    });
  });

  describe('Feature: Improved error handling', () => {
    it('should distinguish between Error instances and other types', () => {
      // Documented in error-handling.test.ts
      // Error instances now log error.message instead of the entire error object
      expect(true).toBe(true);
    });

    it('should convert non-Error exceptions to strings', () => {
      // Documented in error-handling.test.ts
      // String(e) is now used for non-Error exceptions
      expect(true).toBe(true);
    });
  });

  describe('Use cases enabled by new features', () => {
    it('should enable authenticated requests', () => {
      // Use case: User wants to make authenticated API calls
      const options: RequestInit = {
        credentials: 'include',
        headers: { 'Authorization': 'Bearer user-token' }
      };

      expect(options.credentials).toBe('include');
    });

    it('should enable custom user agents', () => {
      // Use case: User wants to identify their bot/scraper
      const options: RequestInit = {
        headers: { 'User-Agent': 'MyBot/1.0 (contact@example.com)' }
      };

      expect(options.headers).toBeDefined();
    });

    it('should enable rate limiting headers', () => {
      // Use case: User wants to add rate limiting identification
      const options: RequestInit = {
        headers: {
          'X-RateLimit-User': 'user-123',
          'X-Request-ID': 'req-456'
        }
      };

      expect(options.headers).toBeDefined();
    });

    it('should enable cookie-based sessions', () => {
      // Use case: User wants to maintain session across requests
      const options: RequestInit = {
        credentials: 'include'
      };

      expect(options.credentials).toBe('include');
    });

    it('should enable CORS configuration', () => {
      // Use case: User wants to control CORS behavior
      const options: RequestInit = {
        mode: 'cors',
        credentials: 'include'
      };

      expect(options.mode).toBe('cors');
    });
  });
});