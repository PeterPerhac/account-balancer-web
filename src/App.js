import React from 'react';
import './App.css';
import $ from 'jquery';

function App() {

    let url = "";

    $(document).ready(function () {
        url = new URL(window.location.href);
    });

    return (
        <div className="App">
            <h2>Something goes here</h2>
            <p>{url}</p>
        </div>
    );

}

export default App;
