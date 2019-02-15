import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Assets
import 'assets/assets-import';
import 'bootstrap/dist/css/bootstrap.css';
import 'nes.css/css/nes.css';

// Componentes
import Home     from "./Home";
import Pokemons from "./Pokemons";
import Pokemon  from "./Pokemon";

<<<<<<< HEAD
=======
// Contexts API
import { ConfigProvider } from "stores/ConfigStore";

>>>>>>> parent of 483cd8e... bkp
class App extends Component {

    render() {
        return (
<<<<<<< HEAD
            <Router>
                <div>
                    <Route exact path="/"   component={Home} />
                    <Route path="/pokemons" component={Pokemons}/> 
                    <Route path="/pokemon"  component={Pokemon}/>
<<<<<<< HEAD
                </React.Fragment>
            </Router>  
=======
            <ConfigProvider>
                <Router>
                    <Switch>
                        <Route exact path="/"   component={Home} />
                        <Route path="/pokemons" component={Pokemons}/> 
                        <Route path="/pokemon"  component={Pokemon}/>
                    </Switch>
                </Router>  
            </ConfigProvider>
>>>>>>> parent of 483cd8e... bkp
=======
                </div>
            </Router>
>>>>>>> parent of 58a753c... tentando implementar context api
        );
    }
}

export default App;
