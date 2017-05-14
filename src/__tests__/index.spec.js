const { createConfig } = require('../index');

describe('createConfig', () => {

  it('takes an array of configs', () => {
    expect(createConfig(['common', 'dev', 'dev-server'], {
      context: __dirname
    })()).toMatchSnapshot();
  });

  it('merges custom config', () => {
    const testConfig = createConfig(['common'], {
      context: __dirname
    })({
      entry: 'my-file.js'
    });
    expect(testConfig.entry).toEqual('my-file.js');
  });

});
