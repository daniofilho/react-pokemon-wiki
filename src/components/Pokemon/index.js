import React, { Component } from 'react';

import Header from 'components/Shared/Header';

// Reacstrap
import {
    Container, 
    Row, 
    Col  } from 'reactstrap';
    
export default class Pokemon extends Component {

    render() {
        return (
            <div className="component-Pokemon">

                <Header />

                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h1>Pokemon</h1>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }

}
