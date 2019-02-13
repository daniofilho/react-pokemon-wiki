import React, { Component } from 'react';

// Contexts API
import { UIContext } from "stores/UIStore";

import {
    Container, 
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class Header extends Component {

    render() {
        return (
            
            <UIContext.Consumer>
                
                { UI => (
                    
                    <div className="component-Header">

                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                            
                            <Container>
                                
                                <NavbarBrand  href="/">
                                    React Pokémon Wiki
                                </NavbarBrand>
                        
                                <NavbarToggler onClick={UI.actions.toggle_menu} />
                            
                                <Collapse isOpen={UI.store.is_menu_open} navbar>
                                    
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
                )}
            
            </UIContext.Consumer>
               
        );
    }

}
