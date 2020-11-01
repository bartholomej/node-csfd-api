import { Csfd } from './src';

const csfd = new Csfd();

csfd.userRatings('912-bart').then((ratings) => console.log(ratings));
