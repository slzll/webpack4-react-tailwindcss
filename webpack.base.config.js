/*
 * @Author: 张棱隆
 * @Date: 2020-08-05 11:15:21
 * @LastEditors: 张棱隆
 * @LastEditTime: 2020-08-05 16:46:36
 * @Description: webpack
 */
const webpack = require("webpack");
const path = require("path");

const resolve = (filepath) => path.resolve(__dirname, filepath);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    filename: "scripts/[name].js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      { test: /\.js(|x)$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
