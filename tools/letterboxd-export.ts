/*
 * Export my ratings to CSV for Letterboxd
 *
 * 1. Get my ratings
 * 2. Convert to CSV
 * 3. Save to file
 * 4. Import to Letterboxd
 */

import { writeFile } from 'node:fs/promises';
import { csfd } from '../src';

/**
 * Runs the Letterboxd export process for a given user.
 * @param userId - The CSFD user ID.
 */
export async function runLetterboxdExport(userId: number) {
  try {
    csfd.setOptions({ language: 'en' });

    console.log(`Fetching ratings for user ${userId}...`);

    const ratings = await csfd.userRatings(userId, {
      includesOnly: ['film'],
      allPages: true,
      allPagesDelay: 1000
    });

    console.log(`Fetched ${ratings.length} ratings.`);

    const escapeCsvField = (value: string) => {
      const needsQuotes = /[",\n\r]/.test(value);
      const escaped = value.replaceAll('"', '""');
      return needsQuotes ? `"${escaped}"` : escaped;
    };

    const csv = [
      'Title,Year,Rating,WatchedDate',
      ...ratings.map((r) => {
        const title = escapeCsvField(r.title ?? '');
        const year = r.year ?? '';
        const rating = r.userRating ?? '';
        const watchedDate = escapeCsvField(r.userDate ?? '');
        return `${title},${year},${rating},${watchedDate}`;
      })
    ].join('\n');

    const fileName = `${userId}.csv`;
    await writeFile(fileName, csv);
    console.log('Saved in file:', `./${fileName}`);
  } catch (error) {
    console.error('Error exporting Letterboxd ratings:', error);
    throw error;
  }
}
