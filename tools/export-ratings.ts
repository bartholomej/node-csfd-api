/*
 * Export ratings in various formats (CSV by default, JSON, Letterboxd CSV supported)
 */

import { writeFile } from 'node:fs/promises';
import { csfd } from '../src';
import { CSFDUserRatingConfig } from '../src/dto/user-ratings';

export interface ExportRatingsOptions {
  format: 'json' | 'csv' | 'letterboxd';
  userRatingsOptions: CSFDUserRatingConfig;
}

/**
 * Runs the ratings export process for a given user.
 * @param userId - The CSFD user ID.
 * @param options - Export options (format, filters, language).
 */
export async function runRatingsExport(userId: number, options: ExportRatingsOptions) {
  try {
    // Apply CSFD options (language, etc.) is handled globally via setOptions currently
    // If language is not explicitly set in options, default to 'en' for Letterboxd,
    // otherwise respect user choice or default.
    if (options.format === 'letterboxd') {
      csfd.setOptions({ language: 'en' });
    }

    console.log(`Fetching ratings for user ${userId} (${options.format.toUpperCase()})...`);

    const ratings = await csfd.userRatings(userId, options.userRatingsOptions);

    console.log(`Fetched ${ratings.length} ratings.`);

    let content = '';
    let fileName = '';

    const escapeCsvField = (value: string) => {
      const needsQuotes = /[",\n\r]/.test(value);
      const escaped = value.replaceAll('"', '""');
      return needsQuotes ? `"${escaped}"` : escaped;
    };

    if (options.format === 'letterboxd') {
      // Letterboxd Import Format
      content = [
        'Title,Year,Rating,WatchedDate',
        ...ratings.map((r) => {
          const title = escapeCsvField(r.title ?? '');
          const year = r.year ?? '';
          const rating = r.userRating ?? '';
          const watchedDate = escapeCsvField(r.userDate ?? '');
          return `${title},${year},${rating},${watchedDate}`;
        })
      ].join('\n');
      fileName = `${userId}-for-letterboxd.csv`;
    } else if (options.format === 'json') {
      // JSON format
      content = JSON.stringify(ratings, null, 2);
      fileName = `${userId}-ratings.json`;
    } else {
      // Generic CSV format (Default)
      // Get all keys from the first object + typical known keys to ensure order
      const headers = ['id', 'title', 'year', 'rating', 'date', 'type', 'url', 'colorRating'];

      content = [
        headers.join(','),
        ...ratings.map((r) => {
          return [
            r.id,
            escapeCsvField(r.title ?? ''),
            r.year ?? '',
            r.userRating ?? '',
            escapeCsvField(r.userDate ?? ''),
            escapeCsvField(r.type ?? ''),
            escapeCsvField(r.url ?? ''),
            escapeCsvField(r.colorRating ?? '')
          ].join(',');
        })
      ].join('\n');
      fileName = `${userId}-ratings.csv`;
    }

    await writeFile(fileName, content);
    console.log('Saved in file:', `./${fileName}`);
  } catch (error) {
    console.error('Error exporting ratings:', error);
    throw error;
  }
}
