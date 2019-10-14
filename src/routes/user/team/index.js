import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TeamList from './team-list'

function Team({ match: url }) {
  return (
    <Switch>
      <Route path={url} component={TeamList} />
      <Redirect to="/error/404" />
    </Switch>
  )
}

export default Team