const path = require('path');
const getProductionConfiguration = require('./webpack.prod.configurator');
const getDevelopmentConfiguration = require('./webpack.dev.configurator');


function getMode(env, argv) {
  if (!argv && !env && !argv.mode) {
    throw Error("mode not provided");
  }
  if (argv && argv.mode) {
    return argv.mode;
  }
  return env;
}

module.exports = (env, argv) => {
  const isLocalDev = getMode(env, argv) !== 'production';
  const lastCommit = require('process').env.LAST_COMMIT_SHA;
  if(!isLocalDev && !lastCommit){
    throw new Error('Ensure last commit sha is set, this should have been automatically set by env-cmd .env.js file');
  }
  const commonConfig = {
    context: __dirname,
    entry: {
      app: [
        '@babel/polyfill',
        './src'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `app-${lastCommit}.js`,
      chunkFilename: `[name]-${lastCommit}.js`,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/,/tpar-bff-protobufs/],
          use: [{
            loader: 'eslint-loader',
            options: { quiet: true, failOnError: true }
          }],
          enforce: 'pre'
        },
        {
          test: /\.s?css$/,
          include: /src|node_modules/,
          use: [
            "style-loader",
            {
              loader: "typings-for-css-modules-loader",
              options: {
                namedExport: true,
                modules: true,
                importLoaders: true,
                camelCase: 'dashes',
                localIdentName: "bas-[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: require('@xero/browserslist-autoprefixer')
                  })
                ]
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.svg/,
          include: /src/,
          use: [
            "babel-loader",
            "svg-react-loader"
          ]
        }
      ]
    },
    resolve: {
      descriptionFiles: ["package.json"],
      modules: [
        'src',
        'node_modules'
      ],
      extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
      fallback:{ "path": false }
    },
    plugins: [],
    devtool: "source-map",
  };
  return isLocalDev ? getDevelopmentConfiguration(commonConfig) : getProductionConfiguration(commonConfig);
}
