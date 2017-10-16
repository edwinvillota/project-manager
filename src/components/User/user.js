import React, { Component } from 'react'
import {Breadcrumb, MenuItem} from 'react-materialize'
import MainMenu from './MainMenu'

import './user.css'

class UserPage extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Breadcrumb>
            <MenuItem>Usuario</MenuItem>
            <MenuItem>Administrar</MenuItem>
          </Breadcrumb>
        </div>
        <div className='App-intro'>
          <div className='row container'>
            <MainMenu />
          </div>
        </div>
      </div>
    )
  }
}

export default UserPage
