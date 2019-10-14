import React, { useEffect } from 'react';
import Router from 'routes';
import { Route, Switch } from 'react-router-dom';
import { UserProvider } from 'contexts/user.context'

function App(props) {
  useEffect(() => {
    async function onMount() {
      // TODO: Handle setting user data
    }
    onMount();
  }, []);

  return (
    <Switch>
      <Route to={'/'} component={Router} />
    </Switch>
  );
}

const AppWrapper = (props) => {
  return (
    <UserProvider>
      <App {...props} />
    </UserProvider>
  )
}

export default AppWrapper;