import React, { Component } from 'react'
import {Breadcrumb, MenuItem, Tabs, Tab} from 'react-materialize'
import {Link} from 'react-router-dom'
import NewEmployee from './newEmployee'
import './staff.css'

class StaffPage extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Breadcrumb>
            <MenuItem><Link to='/user'>Administrar</Link></MenuItem>
            <MenuItem>Personal</MenuItem>
          </Breadcrumb>
        </div>
        <div className='App-intro'>
          <div className='container'>
            <Tabs className='tab-demo z-depth-1'>
              <Tab title='Consultar' active>Test 1</Tab>
              <Tab title='Registrar'><NewEmployee /></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default StaffPage
