import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import pageHome from "./pages/Home";
import pageEmployee from "./pages/Employee";
import pageNotFound from "./pages/NotFound";

const App = (props) => {
  return (
    <Router basename="">
      <Switch>
        <Redirect
          from="/:url*(/+)"
          to={window.location.pathname.slice(0, -1)}
        />
        <Route exact path="/" component={pageHome} />
        <Route exact path="/employee" component={pageEmployee} />
        <Route path="*" component={pageNotFound} />
      </Switch>
    </Router>
  );
};
export default App;
