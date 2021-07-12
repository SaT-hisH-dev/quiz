import React, { Fragment } from "react";
import { Route } from "react-router";
import Sidebar from "./Sidebar";

import Dashboard from "../dashboard/Dashboard";
import { ADMIN_DASHBOARD } from "../../constants/RoutePaths";

export default function Layout() {
  return (
    <Fragment>
      <Sidebar />
      <Route exact path={ADMIN_DASHBOARD} component={Dashboard} />
    </Fragment>
  );
}
