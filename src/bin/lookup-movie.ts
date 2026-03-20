import type { CSFDMovie } from '../dto/movie';
import { csfd } from '..';
import { c } from './utils';

export async function runMovieLookup(movieId: number, json: boolean): Promise<void> {
  const movie = await csfd.movie(movieId);
  if (json) {
    console.log(JSON.stringify(movie, null, 2));
  } else {
    printMovie(movie);
  }
}

function printMovie(movie: CSFDMovie) {
  const ratingColor =
    movie.colorRating === 'good' ? c.green :
    movie.colorRating === 'average' ? c.yellow :
    movie.colorRating === 'bad' ? c.red : c.dim;

  const row = (label: string, value: string) =>
    value ? `  ${c.dim(label.padEnd(11))} ${value}` : '';

  const names = (arr: { name: string }[], max = 5) =>
    arr.slice(0, max).map((x) => x.name).join(', ');

  const description = movie.descriptions?.[0]
    ? movie.descriptions[0].length > 160
      ? movie.descriptions[0].slice(0, 157) + '...'
      : movie.descriptions[0]
    : '';

  const vod = movie.vod?.map((v) => v.title).join(', ') ?? '';

  const lines = [
    '',
    c.bold(movie.title) + c.dim(` (${movie.year ?? '?'})`) + '  ·  ' + c.dim(movie.type ?? ''),
    c.dim('─'.repeat(52)),
    row('Rating', movie.rating != null
      ? ratingColor(c.bold(movie.rating + '%')) + c.dim(`  (${movie.ratingCount?.toLocaleString()} ratings)`)
      : c.dim('no rating')),
    row('Genres',    movie.genres?.join(', ') ?? ''),
    row('Origins',   movie.origins?.join(', ') ?? ''),
    row('Duration',  movie.duration ? movie.duration + ' min' : ''),
    row('Directors', names(movie.creators?.directors ?? [])),
    row('Cast',      names(movie.creators?.actors ?? [])),
    description ? '\n  ' + c.dim(description) : '',
    vod ? '\n' + row('VOD', vod) : '',
    row('URL', c.dim(movie.url ?? '')),
    '',
  ].filter(Boolean);

  console.log(lines.join('\n'));
}
