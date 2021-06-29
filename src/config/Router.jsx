import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Profile from "../containers/Profile";
import NotFound from "../containers/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
