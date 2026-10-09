import { inject } from 'vitest';
import { setAnubisCookie } from '../src/fetchers';

setAnubisCookie(inject('anubisCookie'));
