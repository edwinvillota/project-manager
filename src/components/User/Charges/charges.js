import React, { Component } from 'react'
import {Breadcrumb, MenuItem, Tabs, Tab} from 'react-materialize'
import {Link} from 'react-router-dom'
import './charges.css'

import NewCharge from './newCharge'

class StaffPage extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Breadcrumb>
            <MenuItem><Link to='/user'>Administrar</Link></MenuItem>
            <MenuItem>Cargos</MenuItem>
          </Breadcrumb>
        </div>
        <div className='App-intro'>
          <div className='container'>
            <Tabs className='tab-demo z-depth-1'>
              <Tab title='Consultar' active>Hello</Tab>
              <Tab title='Registrar'><NewCharge /></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default StaffPage
