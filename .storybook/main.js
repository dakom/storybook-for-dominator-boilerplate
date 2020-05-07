const path = require('path');

module.exports = {
  stories: [
    '../src/index.js',
    '../src/stories/**/*.js',
  ],
  addons: [
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
  ],
  /* could not get source maps to work...
  webpackFinal: async (config, { configType }) => {

    config.devtool = "source-map";
    config.module.rules.push(
    {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ]
      }
    );
    return config;

  },
  */
};
