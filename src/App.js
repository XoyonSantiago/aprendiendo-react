import React, { Component } from 'react';
import './App.css';

// importando el componente navegacion
import Navigation from './components/Navigation';
/*/ importamos los archivos json como traidos de base de datos
import { todos } from './todos.json';
console.log(todos);*/
// import Formulario from './components/Formulario';

class App extends Component {
  /*/ creando el constructor
  constructor() {
    super(); // para heredar todas las funcionalidades 
    this.state = {
      titulo: 'Aplicacion de Tareas',
      ntareas: 10
    };
  }*/

  render() {
    return (
      // usuan className para no confundir la clase de una un componente
      /* tutotial con que lo hice 
      1) https://www.youtube.com/watch?v=iHqa6ojKnHI
      2) https://www.youtube.com/watch?v=Q3JBvLOzL0o
      3) https://www.youtube.com/watch?v=67ASQxnnyFE 

      Instalar boostrap en react https://www.techiediaries.com/react-bootstrap/
      */
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
