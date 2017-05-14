
const { createConfig } = require('../src');

module.exports = createConfig()
                  .common({
                    root: __dirname
                  })
                  .dev()
                  .extract()
                  .toConfig();
