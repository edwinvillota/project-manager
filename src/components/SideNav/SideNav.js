import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import './SideNav.css'

class SideMenu extends Component {
  render(){
    return (
      <div className="App-SideNav">
        <SideNav
        	trigger={
            <Button floating large className='sideNavButton red' waves='light' icon='arrow_forward' style={{top: '45px', left: '24px'}}/>
          }
        	options={{ closeOnClick: true }}
        	>
        	<SideNavItem userView
        		user={{
        			background: 'http://lorempixel.com/1000/750',
        			image: 'http://lorempixel.com/150/150',
        			name: 'Edwin Villota',
        			email: 'edwinvillota@hotmail.com'
        		}}
        	/>
        	<SideNavItem href='#!icon' icon='cloud'><Link to="/">Home</Link></SideNavItem>
          <SideNavItem href='#!icon' icon='person'><Link to="/Login">Login</Link></SideNavItem>
        </SideNav>
      </div>
    )
  }
}

export default SideMenu
