import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Root from './root'
import Auth from './auth'
import ErrorRouter from './error'

function Router(props) {
  console.log(props.match.url)
  return (
    <Switch>
      <Route path={`${props.match.url}auth`} component={Auth} />
      <Route path={`${props.match.url}error`} component={ErrorRouter} />
      <Route exact path={`${props.match.url}`} component={Root} />
      <Redirect to="/error/404" />
    </Switch>
  )
}

export default Router