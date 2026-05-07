import type { CSFDSearch } from '../dto/search';
import { csfd } from '..';
import { c } from './utils';

export async function runSearch(query: string, json: boolean): Promise<void> {
  const results = await csfd.search(query);
  if (json) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }
  printSearch(query, results);
}

function printSearch(query: string, results: CSFDSearch) {
  const ratingDot = (colorRating: string | null) =>
    colorRating === 'good'
      ? c.green('●')
      : colorRating === 'average'
        ? c.yellow('●')
        : colorRating === 'bad'
          ? c.red('●')
          : c.dim('●');

  const section = (label: string, count: number) =>
    count > 0 ? `\n${c.bold(label)}  ${c.dim(`(${count})`)}` : null;

  const total =
    results.movies.length +
    results.tvSeries.length +
    results.creators.length +
    results.users.length;

  console.log('');
  console.log(
    `${c.bold('Search results for')} ${c.cyan(`"${query}"`)}  ${c.dim(`— ${total} found`)}`
  );
  console.log(c.dim('─'.repeat(52)));

  const movieLine = (r: CSFDSearch['movies'][0]) =>
    `  ${c.dim(String(r.id).padEnd(8))} ${ratingDot(r.colorRating)}  ${r.title}` +
    (r.year ? c.dim(`  ${r.year}`) : '') +
    (r.origins?.length ? c.dim(`  ${r.origins[0]}`) : '');

  if (results.movies.length > 0) {
    console.log(section('Movies', results.movies.length));
    results.movies.forEach((r) => console.log(movieLine(r)));
  }

  if (results.tvSeries.length > 0) {
    console.log(section('TV Series', results.tvSeries.length));
    results.tvSeries.forEach((r) => console.log(movieLine(r)));
  }

  if (results.creators.length > 0) {
    console.log(section('Creators', results.creators.length));
    results.creators.forEach((r) => console.log(`  ${c.dim(String(r.id).padEnd(8))}    ${r.name}`));
  }

  if (results.users.length > 0) {
    console.log(section('Users', results.users.length));
    results.users.forEach((r) =>
      console.log(
        `  ${c.dim(String(r.id).padEnd(8))}    ${r.user}` +
          (r.userRealName ? c.dim(`  (${r.userRealName})`) : '')
      )
    );
  }

  if (total === 0) {
    console.log(c.dim('  No results found.'));
  }

  console.log('');
}
