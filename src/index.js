import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Cursor from "./utils/cursor";
import "./styles/base.scss";

ReactDOM.render(<App />, document.querySelector("#app"));

const cursor = new Cursor(document.querySelector("#cursor"));
cursor.render();
