import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function Router(props) {
  return (
    <Switch>
      <Route path={`${props.match.url}/404`} component={Error404} />
    </Switch>
  );
}

export default Router;