const { alias } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  alias({
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@models': path.resolve(__dirname, 'src/models'),
    '@api': path.resolve(__dirname, 'src/api'),
  })(config);

  return config;
}