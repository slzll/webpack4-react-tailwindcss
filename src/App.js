import { hot } from "react-hot-loader/root";
import React from "react";
import Card from './components/Card'

const App = () => (
  <div className="container m-auto p-4 md:p-0">
    <Card />
  </div> 
);

export default hot(App);
