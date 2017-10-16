import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import './SideNav.css'

class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        background: 'http://lorempixel.com/1000/750',
        image: 'http://lorempixel.com/150/150',
        name: 'Username',
        email: 'Appointment'
      }
    }
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token) {
      let decoded = jwtDecode(token)
      decoded['background'] = 'http://lorempixel.com/1000/750'
      decoded['image'] = 'http://lorempixel.com/150/150'
      this.setState({
        user: decoded
      })
    }
  }

  render () {
    return (
      <div className='App-SideNav'>
        <SideNav
          trigger={
            <Button floating className='sideNavButton red' waves='light' icon='arrow_forward' style={{top: '12px', left: '24px'}} />
          }
          options={{ closeOnClick: true }}
          >
          <SideNavItem userView
            user={this.state.user}
          />
          <SideNavItem href='#!icon' icon='cloud'><Link to='/'>Home</Link></SideNavItem>
          <SideNavItem href='#!icon' icon='person'><Link to='/Login'>Login</Link></SideNavItem>
        </SideNav>
      </div>
    )
  }
}

export default SideMenu
