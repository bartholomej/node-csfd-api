import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { fetchPage } from '../src/fetchers';

describe('Error Handling Improvements', () => {
  let fetchMock: any;
  let consoleErrorSpy: any;

  beforeEach(() => {
    fetchMock = vi.fn();
    global.fetch = fetchMock;
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Error instance handling', () => {
    it('should log error.message for Error instances', async () => {
      const error = new Error('Network connection failed');
      fetchMock.mockRejectedValueOnce(error);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Network connection failed');
      expect(consoleErrorSpy).not.toHaveBeenCalledWith(error);
    });

    it('should handle TypeError instances', async () => {
      const error = new TypeError('Invalid URL format');
      fetchMock.mockRejectedValueOnce(error);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Invalid URL format');
    });

    it('should handle RangeError instances', async () => {
      const error = new RangeError('Value out of range');
      fetchMock.mockRejectedValueOnce(error);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Value out of range');
    });

    it('should handle custom Error subclasses', async () => {
      class CustomError extends Error {
        constructor(message: string) {
          super(message);
          this.name = 'CustomError';
        }
      }

      const error = new CustomError('Custom error occurred');
      fetchMock.mockRejectedValueOnce(error);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Custom error occurred');
    });
  });

  describe('Non-Error exception handling', () => {
    it('should convert string errors to string', async () => {
      fetchMock.mockRejectedValueOnce('Simple string error');

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Simple string error');
    });

    it('should convert number errors to string', async () => {
      fetchMock.mockRejectedValueOnce(42);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('42');
    });

    it('should convert boolean errors to string', async () => {
      fetchMock.mockRejectedValueOnce(false);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('false');
    });

    it('should handle null errors', async () => {
      fetchMock.mockRejectedValueOnce(null);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('null');
    });

    it('should handle undefined errors', async () => {
      fetchMock.mockRejectedValueOnce(undefined);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('undefined');
    });

    it('should handle object errors', async () => {
      const errorObject = { code: 'ERR_001', detail: 'Something went wrong' };
      fetchMock.mockRejectedValueOnce(errorObject);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('[object Object]');
    });

    it('should handle array errors', async () => {
      fetchMock.mockRejectedValueOnce(['error1', 'error2']);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('error1,error2');
    });

    it('should handle symbol errors', async () => {
      const symbolError = Symbol('error');
      fetchMock.mockRejectedValueOnce(symbolError);

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      // Symbol.toString() returns "Symbol(error)"
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Symbol'));
    });
  });

  describe('HTTP error responses', () => {
    it('should handle 400 Bad Request', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 400,
        text: async () => 'Bad Request'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 400')
      );
    });

    it('should handle 401 Unauthorized', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 401,
        text: async () => 'Unauthorized'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 401')
      );
    });

    it('should handle 403 Forbidden', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 403,
        text: async () => 'Forbidden'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 403')
      );
    });

    it('should handle 404 Not Found', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 404,
        text: async () => 'Not Found'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 404')
      );
    });

    it('should handle 500 Internal Server Error', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 500,
        text: async () => 'Internal Server Error'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 500')
      );
    });

    it('should handle 502 Bad Gateway', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 502,
        text: async () => 'Bad Gateway'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 502')
      );
    });

    it('should handle 503 Service Unavailable', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 503,
        text: async () => 'Service Unavailable'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 503')
      );
    });

    it('should include URL in error message', async () => {
      const testUrl = 'https://example.com/specific/path';
      fetchMock.mockResolvedValueOnce({
        status: 404,
        text: async () => 'Not Found'
      });

      const result = await fetchPage(testUrl);

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining(testUrl)
      );
    });
  });

  describe('Success cases', () => {
    it('should not log errors on successful 2xx responses', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 200,
        text: async () => '<html>Success</html>'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('<html>Success</html>');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should handle 201 Created successfully', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 201,
        text: async () => '<html>Created</html>'
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('<html>Created</html>');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should handle 204 No Content successfully', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 204,
        text: async () => ''
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should handle 304 Not Modified successfully', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 304,
        text: async () => ''
      });

      const result = await fetchPage('https://example.com');

      expect(result).toBe('');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('Error with optionsRequest', () => {
    it('should handle errors when custom options are provided', async () => {
      const error = new Error('Fetch failed with custom options');
      fetchMock.mockRejectedValueOnce(error);

      const options: RequestInit = {
        credentials: 'include',
        headers: { 'Authorization': 'Bearer token' }
      };

      const result = await fetchPage('https://example.com', options);

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Fetch failed with custom options');
    });

    it('should handle HTTP errors with custom options', async () => {
      fetchMock.mockResolvedValueOnce({
        status: 500,
        text: async () => 'Server Error'
      });

      const options: RequestInit = {
        credentials: 'include'
      };

      const result = await fetchPage('https://example.com', options);

      expect(result).toBe('Error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Bad response 500')
      );
    });
  });
});