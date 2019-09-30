import React, { Component } from 'react';

import "./PokemonThumb.scss";

export default class PokemonThumb extends Component {

    state = {
        thumb: this.props.pokeInfo.thumb,
        link: this.props.pokeInfo.link,
        name: this.props.pokeInfo.name
    }
    
    render() {
        return (

            <div className="pokemon-thumb">
                
                <div class="nes-container is-rounded">
                
                    <a href={this.state.link}>
                
                        <img src={this.state.thumb} alt={this.state.name} class="thumb" />
                
                        <p className="name">{this.state.name}</p>
                
                    </a>
                
                </div>
            
            </div>

        );
    }
}