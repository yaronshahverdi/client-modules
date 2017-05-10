
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loader = require('./libs/loader');

const CSS_CLIENT_PREFIX = '!css';
const CSS_SERVER_PREFIX = 'css/locals';

// Only use debuggable class names in dev
const DEV_CSS_MODULE_IDENT = '&localIdentName=[name]__[local]___[hash:base64:5]';
const CSS_MODULE_IDENT = (process.env.NODE_ENV === 'production') ? '' : DEV_CSS_MODULE_IDENT;
const SOURCEMAPS = !(process.env.NODE_ENV === 'production');

const SCSS_OPTIONS = `?-minimize&sourceMap&modules&importLoaders=1${CSS_MODULE_IDENT}!postcss-loader!sass?sourceMap`;
const CSS_OPTIONS = '?-minimize&sourceMap!postcss-loader';

const SCSS_CLIENT = `${CSS_CLIENT_PREFIX}${SCSS_OPTIONS}`;
const SCSS_SERVER = `${CSS_SERVER_PREFIX}${SCSS_OPTIONS}`;

const CSS_CLIENT = `${CSS_CLIENT_PREFIX}${CSS_OPTIONS}`;
const CSS_SERVER = `${CSS_SERVER_PREFIX}${CSS_OPTIONS}`;

let loaders = {
  babel: loader({
    test: /\.js?$/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true
    }
  }),
  css: {
    default: loader({
      test: /\.css?$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader'
        }
      ]
    }),
    extracted: loader({
      test: /\.css?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: SOURCEMAPS,
              localIdentName: CSS_MODULE_IDENT
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      })
    }),
    server: loader({
      test: /\.css?$/,
      use: [
        {
          loader: 'css-loader/locals',
          options: {
            importLoaders: 1,
            sourceMap: SOURCEMAPS,
            localIdentName: DEV_CSS_MODULE_IDENT
          }
        }
      ]
    })
  },
  scss: {
    default: loader({
      test: /\.scss?$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: SOURCEMAPS,
            localIdentName: CSS_MODULE_IDENT
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: SOURCEMAPS
          }
        }
      ]
    }),
    extracted: loader({
      test: /\.scss?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: SOURCEMAPS,
              localIdentName: CSS_MODULE_IDENT
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }),
    server: loader({
      test: /\.scss?$/,
      use: [
        {
          loader: 'css-loader/locals',
          options: {
            modules: true,
            sourceMap: SOURCEMAPS,
            localIdentName: DEV_CSS_MODULE_IDENT
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    })
  }
};

module.exports = loaders;
