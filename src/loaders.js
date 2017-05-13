
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loader = require('./libs/loader');
const merge = require('webpack-merge');

// Only use debuggable class names in dev
const DEV_CSS_MODULE_IDENT = '[name]__[local]___[hash:base64:5]';
const CSS_MODULE_IDENT = (process.env.NODE_ENV === 'production') ? '' : DEV_CSS_MODULE_IDENT;
const SOURCEMAPS = !(process.env.NODE_ENV === 'production');

let loaders = {
  babel: {},
  css: {},
  scss: {}
};

loaders.babel = {
  test: /\.js?$/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true
  }
};

const cssLoaderDefaults = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: SOURCEMAPS,
    localIdentName: CSS_MODULE_IDENT
  }
}

const postCssLoaderDefaults = {
  loader: 'postcss-loader',
  options: {
    plugins: (loader) => [
      require('autoprefixer')()
    ]
  }
}

const scssLoaderDefaults = {
  loader: 'sass-loader',
  options: {
    sourceMap: SOURCEMAPS
  }
}

loaders.css.default = {
  test: /\.css?$/,
  use: [
    {
      loader: 'style-loader'
    },
    merge(cssLoaderDefaults),
    merge(postCssLoaderDefaults)
  ]
};

loaders.css.extracted = {
  test: /\.css?$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      merge(cssLoaderDefaults),
      merge(postCssLoaderDefaults)
    ]
  })
};

loaders.css.server = {
  test: /\.css?$/,
  use: [
    merge(cssLoaderDefaults, {
      loader: 'css-loader/locals'
    })
  ]
};


loaders.scss.default = {
  test: /\.scss?$/,
  use: [
    {
      loader: 'style-loader'
    },
    merge(cssLoaderDefaults, {
      options: {
        modules: true
      }
    }),
    merge(postCssLoaderDefaults),
    merge(scssLoaderDefaults)
  ]
};

loaders.scss.extracted = {
  test: /\.scss?$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      merge(cssLoaderDefaults, {
        options: {
          modules: true
        }
      }),
      merge(postCssLoaderDefaults),
      merge(scssLoaderDefaults)
    ]
  })
};

loaders.scss.server = {
  test: /\.scss?$/,
  use: [
    merge(cssLoaderDefaults, {
      loader: 'css-loader/locals',
      options: {
        modules: true
      }
    }),
    merge(postCssLoaderDefaults),
    merge(scssLoaderDefaults)
  ]
};

module.exports = loaders;
