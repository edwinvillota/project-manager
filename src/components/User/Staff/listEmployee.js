import React, {Component} from 'react'
import {Table} from 'react-materialize'

class ListEmployee extends Component {
  constructor (props) {
    super(props)
    this.state = {
      employees: []
    }
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost:3500/api/staff'
    const fetchData = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    fetch(endpoint, fetchData)
      .then((resp) => resp.json())
      .then(data => {
        if (data) {
          this.setState({
            employees: data
          })
        }
      })
  }

  render () {
    let names
    if (this.state.employees.length) {
      names = this.state.employees.map(e => (
        <tr key={e._id}>
          <td>{e.name}</td>
          <td>{e.lastname}</td>
          <td>{e.appointment}</td>
          <td>{e.status}</td>
        </tr>
      ))
    }
    return (
      <Table>
        <thead>
          <tr>
            <th data-field='name'>Nombre</th>
            <th data-field='lastname'>Apellido</th>
            <th data-field='appointment'>Cargo</th>
            <th data-field='status'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {names}
        </tbody>
      </Table>
    )
  }
}

export default ListEmployee
