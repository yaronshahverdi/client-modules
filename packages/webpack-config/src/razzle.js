const merge = require('webpack-merge');
const configs = require('./config');

const modify = (initialConfig, { target, dev }, webpack) => {
  let config = initialConfig;
  // Change the name of the server output file in production
  if (target === 'node') {
    config = merge(config, configs.cssServer());
  } else if (dev) {
    config = merge(config, configs.css());
  } else {
    config = merge(
      config,
      configs.cssExtracted({
        filename: '[name]-[contenthash].css',
      })
    );
  }
  console.log(config);
  return config;
};

module.exports = modify;
