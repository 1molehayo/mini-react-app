import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PageLayout } from "layouts";
import PageNavigationListener from "services/PageNavigationListener";
import { AnimatePresence } from "framer-motion";

const Devices = lazy(() => import("pages/Devices"));
const Users = lazy(() => import("pages/Users"));

const App = () => {
  return (
    <Router>
      <PageNavigationListener />

      <Switch>
        <PageLayout>
          <Route exact path="/">
            <Redirect to="/devices" />
          </Route>

          <Route
            path="/devices"
            render={(routeProps) => (
              <Suspense fallback={null}>
                <AnimatePresence exitBeforeEnter>
                  <Devices {...routeProps} />
                </AnimatePresence>
              </Suspense>
            )}
          />

          <Route
            exact
            path="/users"
            render={(routeProps) => (
              <Suspense fallback={null}>
                <AnimatePresence exitBeforeEnter>
                  <Users {...routeProps} />
                </AnimatePresence>
              </Suspense>
            )}
          />

          <Redirect to="/devices" />
        </PageLayout>
      </Switch>
    </Router>
  );
};

export default App;
