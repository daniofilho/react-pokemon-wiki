import React, { Component } from 'react';

export const UIContext = React.createContext({});

export class UIProvider extends Component {

    state = {
        mobile_menu_active: false,
        toggle_mobile_menu: () => {
            this.setState({
                mobile_menu_active: (mobile_menu_active) ? false : true
            })
        }
    }
    
    render() {
        return (
            <UIContext.Provider value={ this.state }>
                {this.props.children}
            </UIContext.Provider>
        )
    }

}