import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './signup/index';
import Login from './login/index';

function Router(props) {
  return (
    <Switch>
      <Route exact path={`${props.match.url}/signup`} component={Signup} />
      <Route exact path={`${props.match.url}/login`} component={Login} />
      <Redirect to="/error/404" />
    </Switch>
  );
}

export default Router;