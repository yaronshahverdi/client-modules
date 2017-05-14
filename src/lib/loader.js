
const merge = require('webpack-merge');

const loader = (options) => {
  return (opts) => {
    return {...options, ...opts};
  };
};

module.exports = loader;
