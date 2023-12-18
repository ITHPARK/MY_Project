const path = require("path");

module.exports = {
  entry: "./src/resource/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};