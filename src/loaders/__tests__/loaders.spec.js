const loaders = {
  babel: require('../babel'),
  files: require('../files'),
  styles: require('../styles')
}

describe('Loaders', () => {
  it('matches snapshots', () => {
    expect(loaders).toMatchSnapshot();
  })
});
