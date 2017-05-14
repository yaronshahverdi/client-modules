const merge = require('webpack-merge');
const configs = require('./config');

class WebpackConfig {
  constructor() {
    this._configs = Object.assign({}, configs);
    Object.keys(this._configs).forEach(c => {
      this[c] = (options) => {
        this.merge(this._configs[c](options));
        return this;
      };
    });
    this._value = {};
  }

  get value() {
    return this._value;
  }

  set value(config) {
    this._value = config;
  }

  merge(config) {
    this.value = merge.smart(this.value, config);
  }

  toConfig() {
    return this.value;
  }

}

const createConfig = (options = {}) => {
  return new WebpackConfig(options);
};

module.exports = {
  merge,
  createConfig,
  WebpackConfig,
  configs
};
