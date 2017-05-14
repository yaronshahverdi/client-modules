
const { createConfig } = require('../src');

module.exports = createConfig()
                  .common({
                    root: __dirname
                  })
                  .dev()
                  .devServer({
                    port: 4102
                  })
                  .toConfig();
