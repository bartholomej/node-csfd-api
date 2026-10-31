import type { CSFDUser } from '../dto/user';
import { csfd } from '..';
import { c } from './utils';

export async function runUserLookup(userId: number, json: boolean): Promise<void> {
  const user = await csfd.user(userId);
  if (json) {
    console.log(JSON.stringify(user, null, 2));
  } else {
    printUser(user);
  }
}

function printUser(user: CSFDUser) {
  const row = (label: string, value: string) =>
    value ? `  ${c.dim(label.padEnd(12))} ${value}` : '';

  const count = (value: number | null) => (value != null ? value.toLocaleString() : '');

  const lines = [
    '',
    c.bold(user.user ?? String(user.id)) +
      (user.userRealName ? c.dim(`  (${user.userRealName})`) : ''),
    c.dim('─'.repeat(52)),
    row('Location', user.location ?? ''),
    row('About', user.about ?? ''),
    row('Member since', user.memberSince ?? ''),
    row('Ratings', count(user.ratingsCount)),
    row('Reviews', count(user.reviewsCount)),
    row('Fans', count(user.fans)),
    row('Points', count(user.points)),
    row('URL', c.dim(user.url)),
    ''
  ].filter(Boolean);

  console.log(lines.join('\n'));
}
