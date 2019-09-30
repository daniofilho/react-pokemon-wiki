import React, { Component } from 'react';

// primeiro é necessário criar um Context
export const ConfigContext = React.createContext({});

// Then create a provider Component
export class ConfigProvider extends Component {

    state = {
        page_title: "Lorem Ipsum",
        set_page_title: (_page_title) => {
            this.setState({
                page_title: _page_title
            })
        }
    }
    
    render() {
        return (
            <ConfigContext.Provider value={ this.state }>
                {this.props.children}
            </ConfigContext.Provider>
        )
    }

}