import React, { useEffect } from 'react'
import Router from 'routes'
import { Route, Switch } from 'react-router-dom'

function App(props) {
  useEffect(() => {
    async function onMount() {
      // TODO: Handle setting user data
    }
    onMount()
  }, [])

  return (
    <Switch>
      <Route to={'/'} component={Router} />
    </Switch>
  )
}

export default App