import React, { Component } from 'react';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // mandar los datos
    handleSubmit(e) {
        e.preventDefault(); // evita refrescar la pagina
        // console.log(this.state); // mostramos en consolo lo que se manda
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'Baja'
        });
    }

    // capturar el valor del input
    handleInput(e) {
        const { value, name } = e.target;
        //console.log(value, name);
        // para cambiar los datos del estado
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInput}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInput}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInput}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInput}
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
              </button>
                </form>
            </div>
        )
    }
}
export default Formulario;