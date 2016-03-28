"use strict";

module.exports = function (config) {
  config.set({
    files: [
      "tests/client/client-entry.js"
    ],

    frameworks: ["mocha"],

    preprocessors: {
      "tests/client/client-entry.js": [ "webpack", "sourcemap" ]
    },

    reporters: [ "spec" ],
    singleRun: true,
    webpack: {
      devtool: "source-map",
      externals: {
        jsdom: "window",
        cheerio: "window",
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
      },
      resolve: {
        root: [__dirname],
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js", ".jsx"],
        alias: {
          sinon: require.resolve("sinon/pkg/sinon")
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//,
          /fsevents/
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['react', 'es2015']
            }
          }, {
            test: /\.css$/,
            loader: "style!css"
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    browsers: ["PhantomJS"]
  });
};
