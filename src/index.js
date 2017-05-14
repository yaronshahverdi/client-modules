const merge = require('webpack-merge');
const configs = require('./config');

class WebpackConfig {
  constructor(options = {}) {
    if (!options.rootDirectory) {
      throw new Error('Must provide rootDirectory to WebpackConfig');
    }
    this._configs = Object.assign({}, configs);
    Object.keys(this._configs).forEach(c => {
      this[c] = (opts) => {
        this.merge(this._configs[c](opts, options));
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
