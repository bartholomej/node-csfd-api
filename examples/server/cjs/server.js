"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var node_csfd_api_1 = require("node-csfd-api");
var TYPE = 'TypeScript CJS';
try {
    var result_1;
    node_csfd_api_1.csfd
        .movie(2)
        .then(function (res) {
        result_1 = res;
        var html = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>".concat(res.title, "</title>\n          <style>\n            body { font-family: sans-serif; background: #f9f9f9; padding: 40px; }\n            h1 { color: #333; }\n          </style>\n        </head>\n        <body>\n          <h1>").concat(res.title, "</h1>\n          <p>").concat(res.descriptions[0], "</p>\n          <h3>").concat(TYPE, "</h3>\n          <p><a href=\"").concat(res.url, "\" target=\"_blank\">Open</a></p>\n        </body>\n        </html>\n        ");
        fs.writeFileSync('index.html', html);
        console.log("".concat(TYPE, ": \u2705 index.html has been created with title: ").concat(res.title));
    })
        .catch(function (err) { return console.error(err); });
}
catch (error) {
    console.error("".concat(TYPE, ": \u274C Error:"), error);
}
