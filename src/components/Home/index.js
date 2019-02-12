import React, { Component } from 'react';

import Header from 'components/Shared/Header';
import './Home.scss';

// Contexts API
import { AppProvider } from "components/Contexts/App";

// Reacstrap
import {
    Container, 
    Row, 
    Col  } from 'reactstrap';

export default class Home extends Component {

    render() {
        return (
            
            <div className="container-Home">

                <AppProvider>

                    <Header />

                    <Container>
                        
                        <Row>

                            <Col>

                                <h1 className="page-title text-center">React Pokémon Wiki</h1>

                                <div className="balloon nes-container no-border">

                                    <div className="messages">

                                        <div className="message -left">
                                            
                                            <i className="nes-ash"></i>
                                            
                                            <div className="nes-balloon from-left">
                                                
                                            
                                                <p>Welcome to React Pokémon Wiki!</p>

                                                <p>
                                                    This is a simple project created in React to get Pokémons from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>.
                                                </p>

                                                <p>
                                                    Here you can start browsing the list of Pokémons or you can see which is your random Pokémon for today.
                                                </p>

                                                <p>(can you find a Mewtwo?)</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                
                            </Col>
                                
                        </Row>

                        <Row className="mt-4">
                            
                            <Col md="6" className="text-center">

                                <a href="/pokemons" className="nes-btn is-warning">
                                    Pokémons List
                                </a>

                            </Col>

                            <Col md="6" className="text-center">

                                <a href="/pokemon" className="nes-btn is-error">
                                    Random Pokémon
                                </a>

                            </Col>
                                    
                        </Row>

                    </Container>

                </AppProvider>

            </div>

        );
    }

}