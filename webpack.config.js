var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: "./index.js",
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets:["es2015", "react"]
      }
    }
    ]
  }
};