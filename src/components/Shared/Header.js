import React, { Component } from 'react';

<<<<<<< HEAD
// Contexts API
<<<<<<< HEAD
import { AppContext } from "components/Contexts/App";
=======
import { ConfigContext } from "stores/ConfigStore";
>>>>>>> parent of 483cd8e... bkp

=======
>>>>>>> parent of 58a753c... tentando implementar context api
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
            
<<<<<<< HEAD
            <div className="component-Header">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    
                    <Container>
                        
                        <NavbarBrand  href="/">React Pokémon Wiki</NavbarBrand>
                        
                        <NavbarToggler onClick={this.toggle} />
                        
                        <Collapse isOpen={this.state.isOpen} navbar>
                            
                            <Nav className="ml-auto" navbar>
                                
                                <NavItem className="active">
                                    <NavLink href="/">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </NavItem>
=======
            <ConfigContext.Consumer>
                
                { ConfigStore => (
            
                    <div className="component-Header">

                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                            
                            <Container>
                                
                                <NavbarBrand  href="/">
                                    React Pokémon Wiki
                                    - <small>{ConfigStore.page_title}</small>
                                    <button onClick={ConfigStore.set_page_title('Bingo!')} >Change</button>
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
>>>>>>> parent of 483cd8e... bkp

                                <NavItem>
                                    <NavLink href="/pokemons">Pokémons</NavLink>
                                </NavItem>

                            </Nav>

                        </Collapse>

                    </Container>

                </nav>

<<<<<<< HEAD
            </div>
=======
                    </div>
                )}
            
            </ConfigContext.Consumer>
               
>>>>>>> parent of 483cd8e... bkp
        );
    }

}
