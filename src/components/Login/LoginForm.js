import React, { Component } from 'react'
import { Row, Col, Input, Button, Icon } from 'react-materialize'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      appointment: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: false,
      view: 'Login'
    }
    this.signIn = this.signIn.bind(this)
    this.signUp = this.signUp.bind(this)
    this.handleChangeProperty = this.handleChangeProperty.bind(this)
    this.handleChangeView = this.handleChangeView.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this)
  }

  handleChangeProperty (e) {
    let props = {}
    props[e.target.name] = e.target.value
    this.setState(props)
  }

  handleChangeEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handleConfirmPassword (e) {
    if (e.target.value !== this.state.password) {
      this.setState({
        passwordConfirm: false
      })
    } else {
      this.setState({
        passwordConfirm: true
      })
    }
  }

  handleChangePassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  handleChangeView (e) {
    let state = e.target.checked
    if (state) {
      this.setState({view: 'Signup'})
    } else {
      this.setState({view: 'Login'})
    }
  }

  signIn () {
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    let endpoint = 'http://localhost:3500/api/signin'
    let fetchData = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(endpoint, fetchData)
      .then((resp) => resp.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          window.location.replace('../user')
        } else {
          alert('Credenciales Invalidas')
        }
      })
  }

  signUp () {
    if (this.state.passwordConfirm) {
      let data = {
        name: this.state.name,
        lastname: this.state.lastname,
        appointment: this.state.appointment,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      let endpoint = 'http://localhost:3500/api/signup'
      let fetchData = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      fetch(endpoint, fetchData)
        .then((resp) => resp.json())
        .then(data => {
          console.log(data)
        })
    }
  }

  render () {
    if (this.state.view === 'Login') {
      return (
        <div className='container'>
          <div className='section'>
            <h1>Ingresa tus datos</h1>
          </div>
          <Row>
            <Input onChange={this.handleChangeEmail} s={12} label='Usuario' />
            <Input onChange={this.handleChangePassword} type='password' label='Contraseña' s={12} />
          </Row>
          <Row>
            <Col s={2} offset='s5'>
              <Button onClick={this.signIn} type='submit'>Ingresar<Icon right>send</Icon></Button>
            </Col>
          </Row>
          <Row>
            <Input name='signup' type='checkbox' label='No tengo una cuenta.'
              onChange={this.handleChangeView} />
          </Row>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <div className='section'>
            <h1>Ingresa tus datos</h1>
          </div>
          <Row>
            <Input s={6} name='name' label='Nombre' onChange={this.handleChangeProperty} />
            <Input s={6} name='lastname' label='Apellido' onChange={this.handleChangeProperty} />
            <Input s={6} name='appointment' label='Cargo' onChange={this.handleChangeProperty} />
            <Input s={6} name='username' label='Nombre de Usuario' onChange={this.handleChangeProperty} />
            <Input s={12} name='email' type='email' label='Email' onChange={this.handleChangeEmail} />
            <Input type='password' name='password' label='Contraseña' s={12} onChange={this.handleChangePassword} />
            <Input type='password' name='confirmPassword' label='Confirma tu Contraseña' s={12} onChange={this.handleConfirmPassword} />
          </Row>
          <Row>
            <Col s={2} offset='s5'>
              <Button disabled={!this.state.passwordConfirm} onClick={this.signUp} type='submit'>Registrarse</Button>
            </Col>
          </Row>
          <Row>
            <Input name='signup' type='checkbox' label='No tengo una cuenta.'
              onChange={this.handleChangeView} />
          </Row>
        </div>
      )
    }
  }
}

export default LoginForm
