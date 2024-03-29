import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'
import NavBar from './component/navBar'

function Api() {
  return (
  <div>
    <NavBar />
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/users/:userId?' component={Users} />
      <Route exact path='/' component={Main} />
      <Redirect to='/' />
    </Switch>
  </div>
  )
}

export default Api
