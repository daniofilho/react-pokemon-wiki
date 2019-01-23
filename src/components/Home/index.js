import React, { Component } from 'react';

import logo from 'assets/images/logo.svg';

import Header from 'components/Shared/Header';

// Reacstrap
import {
    Container, 
    Row, 
    Col  } from 'reactstrap';

export default class Home extends Component {

    render() {
        return (
            <div className="container-Home">

                <Header />

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