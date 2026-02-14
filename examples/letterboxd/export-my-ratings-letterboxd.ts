/*
 * Export my ratings to CSV for Letterboxd
 *
 * 1. Get my ratings
 * 2. Convert to CSV
 * 3. Save to file
 * 4. Import to Letterboxd
 */

import { writeFile } from 'node:fs';
import { csfd } from '../../src';

const USER_ID = 912;

csfd.setOptions({ language: 'en' });

csfd
  .userRatings(USER_ID, {
    includesOnly: ['film'],
    allPages: true,
    allPagesDelay: 1000
  })
  .then((ratings) => {
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

    console.log('Saved in file:', `./${USER_ID}.csv`);
    writeFile(`${USER_ID}.csv`, csv, (err) => {
      if (err) return console.log(err);
    });
  });
