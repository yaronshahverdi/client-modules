const configs = require('../index');

describe('Configs: ', () => {

  it('match snapshots', () => {
    const allConfigs = Object.keys(configs).map((config) => {
      return configs[config]({
        context: __dirname
      });
    });
    expect(allConfigs).toMatchSnapshot();
  })

});
