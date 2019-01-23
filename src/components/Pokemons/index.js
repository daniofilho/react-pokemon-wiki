import React, { Component } from 'react';

import Header from 'components/Shared/Header';

// Reacstrap
import {
    Container, 
    Row, 
    Col  } from 'reactstrap';

export default class Pokemons extends Component {

    render() {
        return (
            <div className="component-Pokemons">

                <Header />

                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h1>Pokemons</h1>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }

}
