import React, {Component} from 'react';

class Jumbotron extends Component {

    render(){
        return (
            <div className="jumbotron text-center">
                <div className="container">
                    <h1>Burning money</h1>
                    <h4>Pro tips</h4>
                    <a href="/" className="lang-logo">
                        <img src="./images/money-burning.png" alt="Money Burning"/>
                    </a>
                    <p>Ever wonder what to do with all that spare money just piling up in every corner of your home?</p>
                </div>
            </div>
        );
    }

}

export default Jumbotron;