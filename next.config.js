module.exports = {
  env: {
    BACKEND_URL: 'https://gainz-website.herokuapp.com',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./generate-sitemap');
    }

    return config;
  },
};
