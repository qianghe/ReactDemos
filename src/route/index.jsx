import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Fragment } from "react";
import AsyncCompLoader from '@components/AsyncCompLoader';
import Home from "@page/Home";

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
  path: '/context/get-child-context',
  name: 'GetChildContext',
  component: () => import("../page/Context/GetChildContext"),
}];

const routes = () => (
  <Router>
    <Fragment>
      <ul className="hq-nav">
        {
          configs.map(({ path, name }, index) => (
            <li key={`path_${index}`}>
              <Link to={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
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
    </Fragment>
  </Router>
);

export default routes;
