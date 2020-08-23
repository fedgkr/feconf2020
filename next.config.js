const path = require('path');
const isBuild = process.env.NODE_ENV === 'production';
const { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, APP_ID } = process.env;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
  },
  env: {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    APP_ID,
  },
};
