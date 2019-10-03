import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';


import IndexAppTareas from "./IndexAppTareas";


// componente funcional
/*
* const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
* */
class NavBar extends Component {


    render() {
        return (
            <div>
                <Navbar type="dark" theme="secondary" expand="md">
                    <NavbarBrand href="/">Inicio</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink active href="/AppTareas">
                                App Tareas
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/AppTareas" component={IndexAppTareas}/>
                    </Switch>
                </BrowserRouter>
            </div>

        );
    }
}

export default NavBar