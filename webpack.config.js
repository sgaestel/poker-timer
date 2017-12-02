const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    contentBase: "./",
    index: "index.html"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "client"), "node_modules"]
  }
};
