
const { createConfig } = require('../src');

module.exports = createConfig({
  rootDirectory: __dirname // required
})
.common()
.dev()
.extract()
.toConfig();
