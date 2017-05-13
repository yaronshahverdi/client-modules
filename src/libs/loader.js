const merge = require('webpack-merge');

const loader = (config) => {
  return (...configs) => {
    return merge(config, configs);
  };
};

module.exports = loader;
