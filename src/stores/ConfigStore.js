import React, { Component } from 'react';

// primeiro é necessário criar um Context
export const ConfigContext = React.createContext({});

// Then create a provider Component
export class ConfigProvider extends Component {

    state = {
        page_title: "Lorem Ipsum"
    }

    actions = {
        set_page_title: (_page_title) => {
            this.setState({
                page_title: _page_title
            })
        }
    }
    
    render() {

        const store = this.state;
        const actions = this.actions;

        return (
            <ConfigContext.Provider value={ { store, actions } }>
                {this.props.children}
            </ConfigContext.Provider>
        )
    }

}