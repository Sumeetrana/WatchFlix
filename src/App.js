import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect } from "./helpers/routes";

export default function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
