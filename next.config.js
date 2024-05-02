// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');

module.exports = {
  basePath: process.env.BASE_PATH,
  sassOptions: {
    includePaths: [join(__dirname, './src/client')],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  experimental: {
    appDir: false,
  },
};
