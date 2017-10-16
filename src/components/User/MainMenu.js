import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Col, Card } from 'react-materialize'

class MainMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: [
        {name: 'Personal', description: 'Personal vinculado', link: '../personal'},
        {name: 'Cargos', description: 'Cargos habilitados', link: '../cargos'},
        {name: 'Capacitaciones', description: 'Cronograma de capacitaciones', link: '../personal'},
        {name: 'Mantenimiento', description: 'Cronograma de Mantenimiento', link: '../personal'}
      ]
    }
  }

  render () {
    const cards = this.state.options.map((opt) => (
      <Col m={3} s={12}>
        <Card className='light-blue accent-4' textClassName='white-text' title={opt.name} actions={[<Link to={opt.link}>Administrar</Link>]} >
          {opt.description}
        </Card>
      </Col>
    ))
    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default MainMenu
