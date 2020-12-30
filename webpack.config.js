const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "/dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "localhost",
    port: 8080,
  },
  mode: "development",
};
