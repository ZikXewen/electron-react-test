const path = require("path");
module.exports = {
  mode: "development",
  target: "electron-renderer",
  devtool: "source-map",
  watch: true,
  entry: path.join(__dirname, "src", "js", "index.js"),
  output: {
    filename: "app.js",
    path: path.join(__dirname, "build", "js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
            ["@babel/preset-react"],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
