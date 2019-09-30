import React, { Component } from 'react';

import Header from 'components/Shared/Header';
import pokemon_thumb from "assets/images/pokemon-thumb.png";
import "./pokemons.scss";

// Reacstrap
import {
    Container, 
    Row, 
    Col  } from 'reactstrap';
import PokemonThumb from './PokemonThumb';

export default class Pokemons extends Component {

    state = {
        
        pokeList: [
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            },
            {
                link: "/pokemon/010101",
                name: "Pokémon",
                thumb: pokemon_thumb
            }
        ]

    }



    renderPokemons(){
        
        return this.state.pokeList.map( (pokeInfo ) => {
            return(
                <Col md="3">
                    <PokemonThumb pokeInfo={pokeInfo} />
                </Col>
            )
        })

    }

    render() {
        return (
            <div className="component-Pokemons">

                <Header />

                <Container>
                    
                    <Row>
                        <Col className="text-center">
                            
                            <h1 className="page-title text-center">Pokémons</h1>

                            <p className="text-center">Navigate on the list and click on a Pokémon to see more information.</p>

                        </Col>
                    </Row>

                    <Row>
                        { this.renderPokemons() }
                    </Row>

                    <Row className="mt-4 mb-4">
                        <Col>
                            <a href="#!" class="nes-btn">
                                Previus Page
                            </a>
                        </Col>

                        <Col className="text-right">
                            <a href="#!" class="nes-btn">
                                Next Page
                            </a>
                        </Col>

                    </Row>

                </Container>

            </div>
        );
    }

}
