import { describe, expect, test } from 'vitest';
import { CinemaScraper } from '../src/services/cinema.service';

const DISTRICT = 1;
const PERIOD = 'today';

describe('CinemaScraper', () => {
  test('Should have specific props', async () => {
    const scraper = new CinemaScraper();
    const { cinemas } = await scraper.cinemas();

    expect(Array.isArray(cinemas)).toBe(true);
    expect(cinemas.length).toBeGreaterThan(10);
    expect(cinemas[0].city).toBe('Praha');
    expect(cinemas[0].coords?.lat).toBeGreaterThan(50);
    expect(cinemas[0].coords?.lng).toBeGreaterThan(14);
    expect(cinemas[0].id).toBe(110);
    expect(cinemas[0].name).toContain('Praha');
    expect(cinemas[0].screenings[0].date.length).toBeGreaterThan(0);
    expect(cinemas[0].url).toContain('http');
    expect(cinemas[0].csfdUrl).toContain('/kino/');
    expect(cinemas.every((cinema) => cinema.address)).toBe(true);
  });

  test('Program has the trending films', async () => {
    const scraper = new CinemaScraper();
    const program = await scraper.cinemas(DISTRICT, PERIOD);
    expect(program.cinemas.length).toBeGreaterThan(10);
    expect(program.trending.length).toBeGreaterThan(0);
    expect(program.trending[0].position).toBe(1);
    expect(program.trending[0].id).toBeGreaterThan(0);
  });

  test('Program filtered to one film', async () => {
    const scraper = new CinemaScraper();
    const { trending } = await scraper.cinemas(DISTRICT, PERIOD);
    const filmId = trending[0].id;
    const { cinemas } = await scraper.cinemas(DISTRICT, 'all', { films: [filmId] });
    const ids = cinemas.flatMap((cinema) =>
      cinema.screenings.flatMap((day) => day.films.map((film) => film.id))
    );
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids)).toEqual(new Set([filmId]));
  });

  test('Should fetch cinemas for specific district and period', async () => {
    const scraper = new CinemaScraper();
    const { cinemas } = await scraper.cinemas(DISTRICT, PERIOD);
    expect(Array.isArray(cinemas)).toBe(true);
    expect(cinemas.length).toBeGreaterThan(0);
  });
});
