import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { csfd, Csfd } from '../src';
import { MovieScraper } from '../src/services/movie.service';
import { CreatorScraper } from '../src/services/creator.service';
import { SearchScraper } from '../src/services/search.service';
import { CinemaScraper } from '../src/services/cinema.service';
import { UserRatingsScraper } from '../src/services/user-ratings.service';

describe('OptionsRequest Integration Tests', () => {
  let fetchMock: any;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Global csfd instance with setOptions', () => {
    it('should use default options after setOptions is called', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      csfd.setOptions({ optionsRequest: { credentials: 'include' } });
      await csfd.movie(123);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });

    it('should allow per-method override of default options', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      csfd.setOptions({ optionsRequest: { credentials: 'include' } });
      await csfd.movie(123, { credentials: 'omit' });

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'omit'
        })
      );
    });
  });

  describe('Custom Csfd instance with constructor options', () => {
    it('should use constructor options as defaults', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      const customCsfd = new Csfd(
        new UserRatingsScraper(),
        new MovieScraper(),
        new CreatorScraper(),
        new SearchScraper(),
        new CinemaScraper(),
        { credentials: 'same-origin' }
      );

      await customCsfd.movie(456);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'same-origin'
        })
      );
    });

    it('should allow setOptions to override constructor options', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      const customCsfd = new Csfd(
        new UserRatingsScraper(),
        new MovieScraper(),
        new CreatorScraper(),
        new SearchScraper(),
        new CinemaScraper(),
        { credentials: 'same-origin' }
      );

      customCsfd.setOptions({ optionsRequest: { credentials: 'include' } });
      await customCsfd.movie(789);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });
  });

  describe('Header merging across the stack', () => {
    it('should merge custom headers with default User-Agent', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      await csfd.movie(111, {
        headers: {
          'Authorization': 'Bearer token',
          'X-Custom': 'value'
        }
      });

      const callArgs = fetchMock.mock.calls[0];
      const headers = callArgs[1].headers;
      expect(headers.get('User-Agent')).toBeTruthy();
      expect(headers.get('Authorization')).toBe('Bearer token');
      expect(headers.get('X-Custom')).toBe('value');
    });

    it('should allow overriding User-Agent', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      await csfd.movie(222, {
        headers: {
          'User-Agent': 'CustomBot/2.0'
        }
      });

      const callArgs = fetchMock.mock.calls[0];
      const headers = callArgs[1].headers;
      expect(headers.get('User-Agent')).toBe('CustomBot/2.0');
    });
  });

  describe('All service methods with options', () => {
    const mockHtml = '<html><body>Test content</body></html>';

    beforeEach(() => {
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });
    });

    it('should pass options to movie service', async () => {
      const options: RequestInit = { 
        credentials: 'include',
        headers: { 'X-Movie': 'test' }
      };

      await csfd.movie(100, options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/film/100'),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });

    it('should pass options to creator service', async () => {
      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Creator': 'test' }
      };

      await csfd.creator(200, options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/tvurce/200'),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });

    it('should pass options to search service', async () => {
      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Search': 'test' }
      };

      await csfd.search('query', options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/hledat/'),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });

    it('should pass options to cinema service', async () => {
      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Cinema': 'test' }
      };

      await csfd.cinema(1, 'today', options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/kino/'),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });

    it('should pass options to userRatings service', async () => {
      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Ratings': 'test' }
      };

      await csfd.userRatings('user', undefined, options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining('/uzivatel/'),
        expect.objectContaining({
          credentials: 'include'
        })
      );
    });
  });

  describe('Complex scenarios', () => {
    it('should handle switching between authenticated and unauthenticated requests', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      // First request: authenticated
      await csfd.movie(1, { credentials: 'include' });
      expect(fetchMock).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({ credentials: 'include' })
      );

      // Second request: unauthenticated
      await csfd.movie(2, { credentials: 'omit' });
      expect(fetchMock).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({ credentials: 'omit' })
      );

      // Third request: default
      await csfd.movie(3);
      expect(fetchMock).toHaveBeenLastCalledWith(
        expect.any(String),
        expect.objectContaining({ credentials: 'omit' })
      );
    });

    it('should maintain options through error scenarios', async () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      fetchMock.mockResolvedValueOnce({
        status: 500,
        text: async () => 'Server Error'
      });

      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Test': 'error-test' }
      };

      await csfd.movie(999, options);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          credentials: 'include'
        })
      );

      consoleErrorSpy.mockRestore();
    });

    it('should handle Headers object in optionsRequest', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      const headers = new Headers();
      headers.set('Authorization', 'Bearer complex-token');
      headers.set('X-Request-ID', 'req-123');

      await csfd.movie(555, { headers });

      const callArgs = fetchMock.mock.calls[0];
      const mergedHeaders = callArgs[1].headers;
      expect(mergedHeaders.get('Authorization')).toBe('Bearer complex-token');
      expect(mergedHeaders.get('X-Request-ID')).toBe('req-123');
      expect(mergedHeaders.get('User-Agent')).toBeTruthy();
    });

    it('should handle array-style headers in optionsRequest', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      const headers: [string, string][] = [
        ['Authorization', 'Bearer array-token'],
        ['X-Array-Header', 'array-value']
      ];

      await csfd.movie(666, { headers });

      const callArgs = fetchMock.mock.calls[0];
      const mergedHeaders = callArgs[1].headers;
      expect(mergedHeaders.get('Authorization')).toBe('Bearer array-token');
      expect(mergedHeaders.get('X-Array-Header')).toBe('array-value');
    });
  });

  describe('Pagination with options', () => {
    it('should maintain options across paginated userRatings requests', async () => {
      const page1Html = `
        <div class="box-user-rating">
          <div class="table-container">
            <table><tbody>
              <tr><td><a href="/film/1">Movie 1</a></td></tr>
            </tbody></table>
          </div>
          <div class="box-content"><span>Stránka 1 z 3</span></div>
        </div>
      `;

      const page2Html = `
        <div class="box-user-rating">
          <div class="table-container">
            <table><tbody>
              <tr><td><a href="/film/2">Movie 2</a></td></tr>
            </tbody></table>
          </div>
        </div>
      `;

      const page3Html = `
        <div class="box-user-rating">
          <div class="table-container">
            <table><tbody>
              <tr><td><a href="/film/3">Movie 3</a></td></tr>
            </tbody></table>
          </div>
        </div>
      `;

      fetchMock
        .mockResolvedValueOnce({ status: 200, text: async () => page1Html })
        .mockResolvedValueOnce({ status: 200, text: async () => page2Html })
        .mockResolvedValueOnce({ status: 200, text: async () => page3Html });

      const options: RequestInit = {
        credentials: 'include',
        headers: { 'X-Pagination-Test': 'true' }
      };

      await csfd.userRatings('user', { pagination: true }, options);

      // All three page requests should have the same options
      expect(fetchMock).toHaveBeenCalledTimes(3);
      
      for (let i = 1; i <= 3; i++) {
        expect(fetchMock).toHaveBeenNthCalledWith(
          i,
          expect.any(String),
          expect.objectContaining({
            credentials: 'include'
          })
        );
      }
    });
  });

  describe('Edge cases', () => {
    it('should handle undefined optionsRequest gracefully', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      await csfd.movie(777, undefined);

      expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(Object)
      );
    });

    it('should handle null values in headers gracefully', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      // TypeScript might not allow this, but testing runtime behavior
      const options = {
        headers: {
          'X-Null-Test': null as any
        }
      };

      await csfd.movie(888, options);

      expect(fetchMock).toHaveBeenCalled();
    });

    it('should handle very large headers object', async () => {
      const mockHtml = '<div class="film-header-name"><h1>Test</h1></div>';
      fetchMock.mockResolvedValue({
        status: 200,
        text: async () => mockHtml
      });

      const largeHeaders: Record<string, string> = {};
      for (let i = 0; i < 50; i++) {
        largeHeaders[`X-Custom-Header-${i}`] = `value-${i}`;
      }

      await csfd.movie(999, { headers: largeHeaders });

      const callArgs = fetchMock.mock.calls[0];
      const headers = callArgs[1].headers;
      expect(headers.get('X-Custom-Header-0')).toBe('value-0');
      expect(headers.get('X-Custom-Header-49')).toBe('value-49');
    });
  });
});