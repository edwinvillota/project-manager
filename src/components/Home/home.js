import React, { Component } from 'react';
import { Parallax, Footer, Carousel } from 'react-materialize'

import './home.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Parallax imageSrc="https://images8.alphacoders.com/724/724842.jpg" style={{height: '50px'}}/>
        </div>
        <p className="App-intro">
          <div className="section white">
            <div className="row container">
              <h2 className="header">Project Manager</h2>
              <p className="grey-text text-darken-3 lighten-3">
                Software de administración de proyectos del sector electrico,
                enfocado en el control de:
              </p>
              <ul>
                <li>Planeación</li>
                <li>Ejecución</li>
                <li>Rendimientos</li>
                <li>Materiales</li>
                <li>Salud y Seguridad en el trabajo</li>
                <li>Gestión de Calidad</li>
                <li>Gestión Ambiental</li>
                <li>Gestión de Proveedores</li>
                <li>Presupuesto</li>
              </ul>
              <p className="grey-text text-darken-3 lighten-3">
                Contamos con personal capacitado trabajando diariamente para
                mejorar las prestaciones de nuestro software y brindar el mejor
                acompañamiento a su empresa.
              </p>
            </div>
          </div>
        </p>
        <Carousel images={[
        	'https://lorempixel.com/250/250/nature/1',
        	'https://lorempixel.com/250/250/nature/2',
        	'https://lorempixel.com/250/250/nature/3',
        	'https://lorempixel.com/250/250/nature/4',
        	'https://lorempixel.com/250/250/nature/5'
        ]} />
        <div className="App-footer">
          <Footer copyrights="&copy 2015 Copyright Text"
          	moreLinks={
          		<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          	}
          	links={
          		<ul>
          			<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          			<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          		</ul>
          	}
          	className='grey darken-4'
          >
          		<h5 className="white-text">Footer Content</h5>
          		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Footer>
        </div>
      </div>
    );
  }
}

export default App;
