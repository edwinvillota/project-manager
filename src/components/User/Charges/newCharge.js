import React, {Component} from 'react'
import {Row, Input, Icon, Button} from 'react-materialize'
import Textarea from '../../Inputs/Textarea'

class NewCharge extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      level: '',
      functions: 0,
      salary: 0,
      status: 'Active'
    }

    this.handleChangeProperty = this.handleChangeProperty.bind(this)
    this.saveCharge = this.saveCharge.bind(this)
  }

  handleChangeProperty (e) {
    let props = {}
    props[e.target.name] = e.target.value
    this.setState(props)
  }

  saveCharge () {
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
        <h1>Nuevo Cargo</h1>
        <Row>
          <Input s={6} name='name' label='Nombre' validate onChange={this.handleChangeProperty}><Icon>assignment</Icon></Input>
          <Input s={6} name='appointment' type='select' label='Cargo' defaultValue='1' onChange={this.handleChangeProperty}>
            <option value='1'>Nivel 1</option>
            <option value='2'>Nivel 2</option>
            <option value='3'>Nivel 3</option>
          </Input>
          <Input s={6} name='salary' label='Salario' validate onChange={this.handleChangeProperty}><Icon>attach_money</Icon></Input>
          <Input s={6} name='status' type='select' label='Estado' defaultValue='1' onChange={this.handleChangeProperty}>
            <option value='1'>Activo</option>
            <option value='2'>Retirado</option>
            <option value='3'>Vacaciones</option>
          </Input>
          <Textarea />
          <Button waves='light' onClick={this.saveEmployee}>Registrar</Button>
        </Row>
      </div>
    )
  }
}
export default NewCharge
