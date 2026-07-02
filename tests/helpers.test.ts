import { describe, expect, test } from 'vitest';
import { addProtocol, extractId, extractUser, parseColor, parseIdFromUrl } from '../src/helpers/global.helper';

describe('Add protocol', () => {
  test('Handle without protocol', () => {
    const url = addProtocol('//www.csfd.cz/uzivatel/912-bart/hodnoceni/');
    expect(url).toBe('https://www.csfd.cz/uzivatel/912-bart/hodnoceni/');
  });
  test('Handle with protocol', () => {
    const url = addProtocol('https://www.csfd.cz/uzivatel/912-bart');
    expect(url).toBe('https://www.csfd.cz/uzivatel/912-bart');
  });
  test('Handle http protocol', () => {
    const url = addProtocol('http://www.csfd.cz/uzivatel/912-bart');
    expect(url).toBe('http://www.csfd.cz/uzivatel/912-bart');
  });
});

describe('Parse Id', () => {
  test('Handle whole movie url', () => {
    const url = parseIdFromUrl('https://www.csfd.cz/film/906693-projekt-adam/recenze/');
    expect(url).toBe(906693);
  });
  test('Handle movie url', () => {
    const url = parseIdFromUrl('/film/906693-projekt-adam/recenze/');
    expect(url).toBe(906693);
  });
  test('Handle episode or season url', () => {
    const url = parseIdFromUrl(
      'https://www.csfd.cz/film/1513493-pluribus/1710077-my-jsme-my/prehled/'
    );
    expect(url).toBe(1710077);
  });
  test('Handle movie url with language prefix', () => {
    const url = parseIdFromUrl('/en/film/906693-projekt-adam/recenze/');
    expect(url).toBe(906693);
  });
  test('Handle user url with language prefix', () => {
    const url = parseIdFromUrl('/sk/uzivatel/912-bart/hodnoceni/');
    expect(url).toBe(912);
  });
  test('Handle bad url', () => {
    const url = parseIdFromUrl(null as any);
    expect(url).toBe(null);
  });
  test('bad string', () => {
    const url = parseIdFromUrl('bad string');
    expect(url).toBe(null);
  });
});

describe('extractId', () => {
  test('Handle numeric ID', () => {
    expect(extractId(228329)).toBe(228329);
  });
  test('Handle numeric string', () => {
    expect(extractId('228329')).toBe(228329);
  });
  test('Handle slug', () => {
    expect(extractId('228329-avatar')).toBe(228329);
  });
  test('Handle full URL', () => {
    expect(extractId('https://www.csfd.cz/film/228329-avatar/')).toBe(228329);
  });
  test('Handle invalid strings', () => {
    expect(extractId('invalid-string')).toBe(null);
  });
});

describe('extractUser', () => {
  test('Handle numeric ID', () => {
    expect(extractUser(912)).toBe(912);
  });
  test('Handle numeric string', () => {
    expect(extractUser('912')).toBe(912);
  });
  test('Handle slug', () => {
    expect(extractUser('912-bart')).toBe('912-bart');
  });
  test('Handle full URL', () => {
    expect(extractUser('https://www.csfd.cz/uzivatel/912-bart/')).toBe('912-bart');
  });
  test('Handle full URL with subpath', () => {
    expect(extractUser('https://www.csfd.cz/uzivatel/912-bart/hodnoceni/')).toBe('912-bart');
  });
  test('Handle relative path', () => {
    expect(extractUser('/uzivatel/912-bart/')).toBe('912-bart');
  });
  test('Handle fallback for non-uzivatel strings', () => {
    expect(extractUser('something-else')).toBe('something-else');
  });
});

describe('Parse color', () => {
  test('Red', () => {
    const url = parseColor('red');
    expect(url).toBe('good');
  });
  test('Blue', () => {
    const url = parseColor('blue');
    expect(url).toBe('average');
  });
  test('Light grey', () => {
    const url = parseColor('lightgrey');
    expect(url).toBe('unknown');
  });
  test('Grey', () => {
    const url = parseColor('grey');
    expect(url).toBe('bad');
  });
  test('Wrong color', () => {
    const url = parseColor('adas' as any);
    expect(url).toBe('unknown');
  });
});
