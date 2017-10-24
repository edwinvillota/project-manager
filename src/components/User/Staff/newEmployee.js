import React, {Component} from 'react'
import {Row, Input, Icon, Button} from 'react-materialize'

class NewEmployee extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      document: 0,
      phone: 0,
      appointment: '',
      status: 'Active'
    }

    this.handleChangeProperty = this.handleChangeProperty.bind(this)
    this.saveEmployee = this.saveEmployee.bind(this)
  }

  handleChangeProperty (e) {
    let props = {}
    props[e.target.name] = e.target.value
    this.setState(props)
  }

  saveEmployee () {
    const data = {
      name: this.state.name,
      lastname: this.state.lastname,
      document: this.state.document,
      phone: this.state.phone,
      appointment: this.state.appointment,
      status: this.state.status
    }

    const endpoint = 'http://localhost:3500/api/staff'
    const fetchData = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(endpoint, fetchData)
      .then((resp) => {
        if (resp.ok) {
          resp.json()
            .then(data => {
              console.log(data)
            })
        } else {
          console.log('Error de comunicacion')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h1>Nuevo Empleado</h1>
        <Row>
          <Input s={6} name='name' label='Nombre' validate onChange={this.handleChangeProperty}><Icon>account_circle</Icon></Input>
          <Input s={6} name='lastname' label='Apellido' validate onChange={this.handleChangeProperty}><Icon>account_circle</Icon></Input>
          <Input s={6} name='document' label='Cedula' validate onChange={this.handleChangeProperty}><Icon>credit_card</Icon></Input>
          <Input s={6} name='phone' label='Telefono' validate type='tel' onChange={this.handleChangeProperty}><Icon>phone</Icon></Input>
          <Input s={12} name='appointment' type='select' label='Cargo' defaultValue='1' onChange={this.handleChangeProperty}>
            <option value='1'>CEO</option>
            <option value='2'>Gerente</option>
            <option value='3'>Tecnico</option>
          </Input>
          <Input s={12} name='status' type='select' label='Estado' defaultValue='1' onChange={this.handleChangeProperty}>
            <option value='1'>Activo</option>
            <option value='2'>Retirado</option>
            <option value='3'>Vacaciones</option>
          </Input>
          <Button waves='light' onClick={this.saveEmployee}>Registrar</Button>
        </Row>
      </div>
    )
  }
}

export default NewEmployee
