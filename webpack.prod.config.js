const path = require("path");
const glob = require("glob");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const base = require("./webpack.base.config");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(base, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [MiniPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true, // 控制是否压缩
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new OptimizeCssAssetsPlugin(),
  ],
});
