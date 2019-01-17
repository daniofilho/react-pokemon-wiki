import React, { Component } from 'react';

// Assets
import './assets/assets-import';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './assets/images/logo.svg';

// Reacstrap
import {
    Container, 
    Row, 
    Col,
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class App extends Component {

    // Toggle do Navbar Toggler
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="App">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                        <Container>
                            
                            <NavbarBrand  href="#">React Pokemon Wiki</NavbarBrand>
                            
                            <NavbarToggler onClick={this.toggle} />
                            
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    
                                    <NavItem className="active">
                                        <NavLink href="#">
                                            Home
                                            <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="#">Pokemon</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="#">Pokemon</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="#">Pokemon</NavLink>
                                    </NavItem>

                                </Nav>
                            </Collapse>

                        </Container>
                    </nav>

                    <Container>
                        <Row>
                            <Col lg="12" className="text-center">
                                
                                <div className="App-header">
                                    
                                    <img src={logo} className="App-logo" alt="logo" />
                                    
                                    <p>
                                        Edit <code>src/App.js</code> and save to reload.
                                    </p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn React
                                    </a>

                                </div>{/* .App-Header */}

                            </Col>
                        </Row>
                    </Container>

            </div>
        );
    }
}

export default App;
