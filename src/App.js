import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// SideNav
import SideNav from './components/SideNav/SideNav'

// Pages

import Home from './components/Home/home'
import Login from './components/Login/login'
import User from './components/User/user'
import Staff from './components/User/Staff/staff'

const App = () => (
  <Router>
    <div>
      <SideNav />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/user' component={User} />
      <Route path='/personal' component={Staff} />
    </div>
  </Router>
)
export default App
