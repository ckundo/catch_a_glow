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
          exclude: /\/node_modules\//,
          loader: "babel-loader"
        }
        ]
      },
      externals: {
        "react/addons": true
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
