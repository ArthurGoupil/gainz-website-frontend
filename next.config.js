module.exports = {
  env: {
    BACKEND_URL: 'https://gainz-website.herokuapp.com',
  },
  scripts: {
    build: 'next build && next export',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./generate-sitemap');
    }

    return config;
  },
};
