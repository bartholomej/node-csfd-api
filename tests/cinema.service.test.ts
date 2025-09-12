import { describe, expect, test } from 'vitest';
import { CSFDCinema } from '../src/interfaces/cinema.interface';
import { CinemaScraper } from '../src/services/cinema.service';

const DISTRICT = 1;
const PERIOD = 'today';

describe('CinemaScraper', () => {
  test('Should have specific props', async () => {
    const scraper = new CinemaScraper();
    const cinemas: CSFDCinema[] = await scraper.cinemas();

    expect(Array.isArray(cinemas)).toBe(true);
    expect(cinemas.length).toBe(27);
    expect(cinemas[0].city).toBe('Praha');
    expect(cinemas[0].coords).toStrictEqual({ lat: 50.0711592, lng: 14.4015589 });
    expect(cinemas[0].id).toBe(110);
    expect(cinemas[0].name).toBe('CineStar Praha');
    expect(cinemas[0].screenings[0].date).toContain('pátek');
    expect(cinemas[0].url).toBe('http://www.cinestar.cz/cz/praha5/domu');
  });

  test('Should fetch cinemas for specific district and period', async () => {
    const scraper = new CinemaScraper();
    const cinemas: CSFDCinema[] = await scraper.cinemas(DISTRICT, PERIOD);
    expect(Array.isArray(cinemas)).toBe(true);
    expect(cinemas.length).toBeGreaterThan(0);
  });
});
