import { describe, expect, test } from 'vitest';
import { addProtocol, parseColor, parseIdFromUrl, extractId } from '../src/helpers/global.helper';

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

describe('Extract Id', () => {
  test('Handle plain numbers', () => {
    const id = extractId(535121);
    expect(id).toBe(535121);
  });
  test('Handle numeric strings', () => {
    const id = extractId('535121');
    expect(id).toBe(535121);
  });
  test('Handle URL slugs', () => {
    const id = extractId('535121-blade-runner-2049');
    expect(id).toBe(535121);
  });
  test('Handle full CSFD URLs', () => {
    const id = extractId('https://www.csfd.cz/film/535121-blade-runner-2049/prehled/');
    expect(id).toBe(535121);
  });
  test('Handle CSFD URLs path only', () => {
    const id = extractId('/film/535121-blade-runner-2049/prehled/');
    expect(id).toBe(535121);
  });
  test('Handle non-id slug starting with numbers', () => {
    const id = extractId('3d-printers');
    expect(id).toBe(null);
  });
  test('Handle bad strings', () => {
    const id = extractId('bad string');
    expect(id).toBe(null);
  });
  test('Handle null/undefined correctly via TS bypass', () => {
    const id = extractId(null as any);
    expect(id).toBe(null);
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
