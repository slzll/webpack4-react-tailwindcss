# webpack4 + React + tailwindcss

## react 热更新

react 热更新需要使用`react-hot-loader`，并且因为支持 react hooks，需要进行一些变动

1. 添加 babel 插件

```json
// .babelrc
{
  "plugins": ["react-hot-loader/babel"]
}
```

2. 根组件

```js
import { hot } from "react-hot-loader/root";
import React from "react";
import Card from "./components/Card";

const App = () => (
  <div className="container m-auto p-4 md:p-0">
    <Card />
  </div>
);

export default hot(App);
```

3. 在 react 和 react-dom 之前引入 react-hot-loader（两种方式任选一种）

- import 方式

```js
import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
```

- webpack 配置

```js
// webpack.config.js
module.exports = {
  entry: ["react-hot-loader/patch", "./src"],
  // ...
};
```

4. hooks 支持

- 安装`@hot-loader/react-dom`

```bash
yarn add @hot-loader/react-dom
```

- alias 替换 react-dom

```js
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
```

## tailwindcss 控制文件大小

tailwindcss 直接打包的话文件会很大，未压缩有 1.9M，即使压缩后也有 1.4M，其中很多是没有用到的样式
使用 webpack 插件`purgecss-webpack-plugin`可以删除无用 css，减小 css 文件大小

使用方法：

```js
const path = require("path");
const glob = require("glob");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
};
```
