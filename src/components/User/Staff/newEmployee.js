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
  }

  render () {
    return (
      <div>
        <h1>Nuevo Empleado</h1>
        <Row>
          <Input s={6} label='Nombre' validate><Icon>account_circle</Icon></Input>
          <Input s={6} label='Apellido' validate><Icon>account_circle</Icon></Input>
          <Input s={6} label='Cedula' validate><Icon>credit_card</Icon></Input>
          <Input s={6} label='Telefono' validate type='tel'><Icon>phone</Icon></Input>
          <Input s={12} type='select' label='Cargo' defaultValue='1'>
            <option value='1'>CEO</option>
            <option value='2'>Gerente</option>
            <option value='3'>Tecnico</option>
          </Input>
          <Input s={12} type='select' label='Estado' defaultValue='1'>
            <option value='1'>Activo</option>
            <option value='2'>Retirado</option>
            <option value='3'>Vacaciones</option>
          </Input>
          <Button waves='light'>Registrar</Button>
        </Row>
      </div>
    )
  }
}

export default NewEmployee
