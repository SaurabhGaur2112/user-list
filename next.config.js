const path = require('path');
const withSass = require('@zeit/next-sass');
require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const { API_URL, ASSET_PREFIX, MODE, STATIC_PATH, SITE_URL } = process.env;
const assetPrefix = ASSET_PREFIX;

/* eslint-disable */
module.exports = Object.assign({},
  withSass(),
  assetPrefix,
  {
    publicRuntimeConfig: {
      API_URL,
      MODE,
      STATIC_PATH,
      SITE_URL,
    }
  }
);
