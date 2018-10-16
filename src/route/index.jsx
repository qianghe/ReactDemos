import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";
import AsyncCompLoader from '@components/AsyncCompLoader';
import Nav from '@components/Nav';
import Home from "@page/Home";
import Context from '@page/Context/ContextProvider/context.js';

const configs = [{
  path: '/home',
  name: 'Home',
  component: Home,
  needAsync: false,
}, {
  path: '/life-cycle',
  name: 'LifeCycle',
  component: () => import("../page/LifeCycle"),
}, {
  path: '/set-state',
  name: 'SetState',
  component: () => import("../page/SetState"),
}, {
  path: '/context',
  name: 'Context',
  component: () => import("../page/Context"),
}];

const routes = () => (
    <Router>
      <Fragment>
        <Context.UserProvider value={{name: 'hqiswonder'}}>
          <Nav menus={configs} />
          <Switch>
              {
                configs.map(({ path, component, needAsync = true}, index) => (
                  <Route
                    key={`route_${index}`}
                    path={path} 
                    component={needAsync ? AsyncCompLoader(component) : component} />
                ))
              }
            </Switch>
          </Context.UserProvider>
      </Fragment>
    </Router>
);

export default routes;
