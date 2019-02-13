import React, { Component } from 'react';

export const UIContext = React.createContext({});

export class UIProvider extends Component {

    state = {
        is_menu_open: false
    }

    actions = {
        toggle_menu: () => {
            this.setState({ 
                is_menu_open:  !this.state.is_menu_open
            })            
        }
    }
    
    render() {

        const store = this.state;
        const actions = this.actions;

        return (
            <UIContext.Provider value={ { store, actions } }>
                {this.props.children}
            </UIContext.Provider>
        )
    }

}