const loader = (options) => {
  return (opts) => {
    return Object.assign({}, options, opts);
  };
};

module.exports = loader;
