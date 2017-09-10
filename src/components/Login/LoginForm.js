import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon } from 'react-materialize'

class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'Login'
    }
    this.handleChangeView = this.handleChangeView.bind(this)
  }

  handleChangeView(e){
    let state = e.target.checked
    if(state){
      this.setState({view: 'Signup'})
    } else {
      this.setState({view: 'Login'})
    }
  }

  render(){
    if(this.state.view === 'Login'){
      return(
        <div className="container">
          <div className="section">
            <h1>Ingresa tus datos</h1>
          </div>
          <Row>
            <Input s={12} label="Usuario"/>
            <Input type="password" label="Contraseña" s={12}/>
          </Row>
          <Row>
            <Col s={2} offset="s5">
              <Button type="submit">Ingresar<Icon right>send</Icon></Button>
            </Col>
          </Row>
          <Row>
            <Input name="signup" type="checkbox" label="No tengo una cuenta."
                    onChange={this.handleChangeView}/>
          </Row>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="section">
            <h1>Ingresa tus datos</h1>
          </div>
          <Row>
            <Input s={6} label="Nombre"/>
            <Input s={6} label="Apellido"/>
            <Input s={6} label="Cargo"/>
            <Input s={6} label="Nombre de Usuario"/>
            <Input s={12} type="email" label="Email"/>
            <Input type="password" label="Contraseña" s={12}/>
            <Input type="password" label="Confirma tu Contraseña" s={12}/>
          </Row>
          <Row>
            <Col s={2} offset="s5">
              <Button type="submit">Registrarse<Icon right>send</Icon></Button>
            </Col>
          </Row>
          <Row>
            <Input name="signup" type="checkbox" label="No tengo una cuenta."
                    onChange={this.handleChangeView}/>
          </Row>
        </div>
      )
    }

  }
}

export default LoginForm
