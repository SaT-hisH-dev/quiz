import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import AdminIndex from "./components/layout";
//
import {
  INITIAL_ROUTE,
  ADMIN_ROUTE,
  ADMIN_DASHBOARD,
} from "./constants/RoutePaths";

function App() {
  return (
    <Switch>
      <Route path={ADMIN_ROUTE} component={AdminIndex} />
      <Route
        exact
        path={INITIAL_ROUTE}
        render={() => <Redirect to={ADMIN_DASHBOARD} />}
      />
    </Switch>
  );
}

export default App;
