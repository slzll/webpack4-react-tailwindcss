/*
 * @Author: 张棱隆
 * @Date: 2020-08-05 13:38:24
 * @LastEditors: 张棱隆
 * @LastEditTime: 2020-08-05 15:50:39
 * @Description: development
 */
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const base = require("./webpack.base.config");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    quiet: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
});
