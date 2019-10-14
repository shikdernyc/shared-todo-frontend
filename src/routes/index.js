import React, { Fragment, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Root from './root';
import User from './user';
import Auth from './auth';
import Components from './components';
import ErrorRouter from './error';
import UserContext from 'contexts/user.context'

function Router(props) {
  const { isAuthenticated } = useContext(UserContext)

  const unauthRoutes = (
    <Fragment>
      <Route exact path={`${props.match.url}`} component={Root} />
      <Route path={`${props.match.url}auth`} component={Auth} />
    </Fragment>
  );

  const authUserRoutes = (
    <Fragment>
      <Route path={`${props.match.url}`} component={User} />
    </Fragment>
  );

  return (
    <Switch>
      <Route path={`${props.match.url}error`} component={ErrorRouter} />
      <Route path={`${props.match.url}components`} component={Components} />
      {isAuthenticated() ? authUserRoutes : unauthRoutes}
      <Redirect to="/error/404" />
    </Switch>
  );
}

export default Router;