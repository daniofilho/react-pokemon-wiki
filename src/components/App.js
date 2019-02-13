import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Assets
import 'assets/assets-import';
import 'bootstrap/dist/css/bootstrap.css';
import 'nes.css/css/nes.css';

// Componentes
import Home     from "./Home";
import Pokemons from "./Pokemons";
import Pokemon  from "./Pokemon";

// Contexts API
import { ConfigProvider } from "stores/ConfigStore";

class App extends Component {

    render() {
        return (
            <ConfigProvider>
                <Router>
                    <Switch>
                        <Route exact path="/"   component={Home} />
                        <Route path="/pokemons" component={Pokemons}/> 
                        <Route path="/pokemon"  component={Pokemon}/>
                    </Switch>
                </Router>  
            </ConfigProvider>
        );
    }
}

export default App;
