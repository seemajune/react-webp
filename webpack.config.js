var path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
      path: path.join(__dirname, "www"),
      filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  devServer: {
    contentBase: "www/",
    inline: true,
    colors: true,
    progress: true,
  }
};