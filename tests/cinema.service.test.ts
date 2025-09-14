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
    expect(cinemas.length).toBeGreaterThan(10);
    expect(cinemas[0].city).toBe('Praha');
    expect(cinemas[0].coords?.lat).toBeGreaterThan(50);
    expect(cinemas[0].coords?.lng).toBeGreaterThan(14);
    expect(cinemas[0].id).toBe(110);
    expect(cinemas[0].name).toContain('Praha');
    expect(cinemas[0].screenings[0].date.length).toBeGreaterThan(0);
    expect(cinemas[0].url).toContain('http');
  });

  test('Should fetch cinemas for specific district and period', async () => {
    const scraper = new CinemaScraper();
    const cinemas: CSFDCinema[] = await scraper.cinemas(DISTRICT, PERIOD);
    expect(Array.isArray(cinemas)).toBe(true);
    expect(cinemas.length).toBeGreaterThan(0);
  });
});
