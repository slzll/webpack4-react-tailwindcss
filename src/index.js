/*
 * @Author: 张棱隆
 * @Date: 2020-08-05 11:14:40
 * @LastEditors: 张棱隆
 * @LastEditTime: 2020-08-05 16:49:08
 * @Description: Do not edit
 */
import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cursor from "./utils/cursor";
import "./styles/base.scss";

ReactDOM.render(<App />, document.querySelector("#app"));

const cursor = new Cursor(document.querySelector("#cursor"));
cursor.render();
