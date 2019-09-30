import React, { Component } from 'react';

import Header from 'components/Shared/Header';

import pokemon_thumb from "assets/images/pokemon-thumb.png";

import "./pokemon.scss";

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
                            <h1 class="text-center page-title">Pokemon Name</h1>
                        </Col>
                    </Row>

                    <Row>

                        <Col md="4">
                            <div class="nes-container is-rounded">
                                <img src={pokemon_thumb} alt="Pokémon Name" />
                            </div>
                        </Col>

                        <Col md="8">

                            <h3>Type: Pokémon Type</h3>

                            <h4>
                                Pokémon Information
                            </h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan orci sed risus volutpat, ac sagittis ipsum accumsan. Vestibulum dictum laoreet dolor, 
                                a bibendum orci dapibus non. Aliquam condimentum ipsum ornare nulla imperdiet, in dapibus nisi mollis. Nulla facilisi. Mauris congue massa eu dui consequat blandit. 
                                Proin quis est in magna fringilla elementum vitae sit amet turpis. Donec venenatis turpis et elementum aliquam. Fusce nulla mauris, pretium et vehicula sit amet, 
                                volutpat vel felis. Morbi in arcu tincidunt, gravida purus et, laoreet magna. Cras neque turpis, mattis vel consectetur ut, luctus blandit felis. Nam sed odio 
                                elit. Cras porta cursus consectetur.
                            </p>

                            <p>
                                Vivamus viverra lectus at est vehicula dictum. Mauris vel velit non dui tincidunt aliquet ut at libero. Aliquam ante ante, accumsan ut pretium non, 
                                congue vitae ipsum. Praesent augue lorem, mollis id venenatis a, posuere vel metus. Etiam ac aliquam lorem, non gravida neque. Nunc ultrices tincidunt 
                                metus sit amet ultricies. Sed metus ligula, aliquam id sodales eu, semper eget lectus. 
                            </p>

                        </Col>
                        
                    </Row>

                </Container>

            </div>
        );
    }

}
