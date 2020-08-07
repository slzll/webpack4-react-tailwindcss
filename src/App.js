import { hot } from "react-hot-loader/root";
import React from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Card from "./components/Card";
import MediaSession from "./views/MediaSession";

const App = () => (
  <Router>
    <div className="bg-white mb-4">
      <div className="container m-auto py-3">
        <div className="nav-box flex justify-end">
          <NavLink className="ml-3 font-bold hover:underline" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink className="ml-3 font-bold hover:underline" to="/mediaSession" activeClassName="active">
            MediaSession
          </NavLink>
        </div>
      </div>
    </div>

    <Switch>
      <Route path="/mediaSession">
        <MediaSession />
      </Route>
      <Route path="/">
        <div className="container m-auto p-4 md:p-0">
          <Card />
        </div>
      </Route>
    </Switch>
  </Router>
);

export default hot(App);
