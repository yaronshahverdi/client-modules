
const { createConfig } = require('../src');

module.exports = createConfig({
  rootDirectory: __dirname
})
.common()
.dev()
.devServer({
  port: 4102
})
.toConfig();
