import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import AppHeader from './header-footer/AppHeader';
import Stocks from './containers/Stocks';

const Routes = () => (
  <Router>
    <AppHeader>
      <Switch>
        <Route exact path="/" component={Stocks} />
        <Redirect from="*" to="/" />
      </Switch>
    </AppHeader>
  </Router>
);

export default Routes;
