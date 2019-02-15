import React, { Component } from 'react';

// Contexts API
import { AppContext } from "components/Contexts/App";

import {
    Container, 
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Header extends Component {

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
            
            <div className="component-Header">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    
                    <Container>
                        
                        <NavbarBrand  href="/">
                            React Pokémon Wiki
                            - <small>
                                <AppContext.Provider>
                                    {(context) => (
                                        <React.Fragment>
                                            {context.state.page_title}
                                        </React.Fragment>
                                    )}
                                </AppContext.Provider>
                            </small>
                        </NavbarBrand>
                        
                        <NavbarToggler onClick={this.toggle} />
                        
                        <Collapse isOpen={this.state.isOpen} navbar>
                            
                            <Nav className="ml-auto" navbar>
                                
                                <NavItem className="active">
                                    <NavLink href="/">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/pokemons">Pokémons</NavLink>
                                </NavItem>

                            </Nav>

                        </Collapse>

                    </Container>

                </nav>

            </div>
        );
    }

}
