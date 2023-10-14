const path = require("path");

module.exports = {
  entry: "./src/javascript/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  }
}