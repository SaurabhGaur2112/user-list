const path = require('path');
const withSass = require('@zeit/next-sass');
require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const { API_URL, MODE, SITE_URL } = process.env;

/* eslint-disable */
module.exports = Object.assign({},
  withSass(),
  {publicRuntimeConfig: {
    API_URL,
    MODE,
    SITE_URL,
  }},
  {exportPathMap: async function() {
    return {
      '/': { page: '/' },
    };
  }}
);
