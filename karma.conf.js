var webpackConfig = require(__dirname + "/webpack.config");

module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
      "tests.webpack.js"
    ],
    preprocessors: {
      "tests.webpack.js": ["webpack", "sourcemap"]
    },
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ["dots"],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ["PhantomJS"],
    singleRun: true
  });
};
