module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
      "src/**/*.js",
      "tests.webpack.js"
    ],
    preprocessors: {
      "tests.webpack.js": ["webpack", "sourcemap"]
    },
    webpack: {
      devtool: "inline-source-map",
      module: {
        loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
        ]
      }
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
