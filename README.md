# webpack-config

Shared webpack configurator

### Basic config


```js
// webpack.config.js

import { createConfig } from '@codecademy/webpack-config';

module.exports = createConfig('dev', {
  context: __dirname, // REQUIRED
  entry: 'app.js' // defaults to main.js
  output: {
    filename: 'app.js', // defaults to main.js
    path: path.resolve(__dirname, 'public') // defaults to /dist
  }
})
```

### Dev server config


```js
// webpack.config.js

import { createConfig } from '@codecademy/webpack-config';

module.exports = createConfig('dev', {
  // See basic config
  devServer: {
    port: 4000, // defaults to 3808
    publicPath: `http://localhost:4000/assets/`
  }
})
```
