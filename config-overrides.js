const { alias } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  alias({
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@pages': path.resolve(__dirname, 'src/pages'),
  })(config);

  return config;
}