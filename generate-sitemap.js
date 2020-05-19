const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://gainz-art.com',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/',
  nextConfigPath: __dirname + '/next.config.js',
});
