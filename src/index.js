const merge = require('webpack-merge');
const configs = require('./config');

class WebpackConfig {
  constructor(initialValue = {}) {
    this._configs = Object.assign({}, configs);
    Object.keys(this._configs).forEach(c => {
      this[c] = (opts) => {
        this.merge(this._configs[c](opts));
        return this;
      };
    });
    this._value = Object.assign({}, initialValue);
  }

  get value() {
    return this._value;
  }

  set value(config) {
    this._value = config;
  }

  merge(config) {
    this.value = merge.smart(this.value, config);
    return this;
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
