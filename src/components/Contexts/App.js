import React, { Component } from 'react';

// primeiro é necessário criar um Context
export const AppContext = React.createContext({});

// Then create a provider Component
export class AppProvider extends Component {

    state = {
        page_title: "Lorem Ipsum",
        set_page_title: (_page_title) => {
            this.setState({
                page_title: _page_title
            })
        }
    }
    
    // É necessário criar um compoente com a propriedade value e passar o objeto de valores e funções pra ele
    render() {
        return (
            <AppContext.Provider 
                value={ { state: this.state } }>
            </AppContext.Provider>
        )
    }
}