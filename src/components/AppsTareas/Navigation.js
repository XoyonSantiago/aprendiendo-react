import React, { Component } from 'react';
import logo from '../../logo.svg';
import Formulario from './Formulario';
// importamos el estilo
import './Navigation.css';

// importamos los archivos json como traidos de base de datos
import { todos } from '../AppsTareas/todos';
console.log(todos);



class Navigation extends Component {
    // creando el constructor
    constructor() {
        super(); // para heredar todas las funcionalidades 
        this.state = {
            todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this); // esta referenciado
    }

    // para mandar parametros a todos
    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]  // aca  le decimos que agrege una nueva tarea
        })
    }

    // eliminar la tarea
    eliminarTodo(index){
       // console.log(index); miramos su indice
       // restrinccion para borrar una tarea
       if(window.confirm('Seguro que desea Eliminar?')){
        this.setState({
            // el metodo filter recore uno a uno y si no comple con una condicion no lo agrega
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        })
       }
    }

    // la propiedad props es para acceder a las propiedades de titulo que colocan en app.js
    render() {
        console.log('Antes de renderizar el componente');
        // con map se recorre como un for 
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger"
                                    onClick={this.eliminarTodo.bind(this, i)}
                                    >
                                Eliminar
                            </button>
                        </div>
                    </div>
                    <br/>
                </div>
            );
        })

        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a href="https://www.linkedin.com/in/saputxoyonsantiago/" className="text-white">
                        Tareas
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Formulario onAddTodo={this.handleAddTodo} />
                        </div>

                        <div className="col mt-8">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;