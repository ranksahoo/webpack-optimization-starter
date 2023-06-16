const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    clean: true,
    // clean: { dry: true, keep: /\.css/ },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: [
    //     "**/*",
    //     path.join(process.cwd(), "dist/**/*"),
    //   ],
    // }),
  ],
};

module.exports = config;
