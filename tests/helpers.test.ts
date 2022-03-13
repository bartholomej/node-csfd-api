import { addProtocol, parseColor, parseIdFromUrl } from '../src/helpers/global.helper';

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
    expect(url).toBe(null);
  });
  test('Handle movie url', () => {
    const url = parseIdFromUrl('/film/906693-projekt-adam/recenze/');
    expect(url).toBe(906693);
  });
  test('Handle bad url', () => {
    const url = parseIdFromUrl(null);
    expect(url).toBe(null);
  });
  test('bad string', () => {
    const url = parseIdFromUrl('bad string');
    expect(url).toBe(null);
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
  test('Bad', () => {
    const url = parseColor('adas' as any);
    expect(url).toBe('unknown');
  });
});
