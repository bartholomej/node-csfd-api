import fs from 'fs';
import { csfd, CSFDMovie } from 'node-csfd-api';

const TYPE = 'TypeScript CJS';

try {
  let result;
  csfd
    .movie(2)
    .then((res: CSFDMovie) => {
      result = res;

      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${res.title}</title>
          <style>
            body { font-family: sans-serif; background: #f9f9f9; padding: 40px; }
            h1 { color: #333; }
          </style>
        </head>
        <body>
          <h1>${res.title}</h1>
          <p>${res.descriptions[0]}</p>              
          <h3>${TYPE}</h3>
          <p><a href="${res.url}" target="_blank">Open</a></p>
        </body>
        </html>
        `;

      fs.writeFileSync('index.html', html);
      console.log(`${TYPE}: ✅ index.html has been created with title: ${res.title}`);
    })
    .catch((err) => console.error(err));
} catch (error) {
  console.error(`${TYPE}: ❌ Error:`, error);
}
