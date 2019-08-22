import React from 'react';

import './App.css';
import Jumbotron from "./components/jumbotron"
import GraphsContainer from "./components/graphsContainer"

function App() {

    return (
        <div className="App">

            <Jumbotron />

            <div className="container">
                <GraphsContainer />
            </div>

        </div>
    );
}

export default App;
