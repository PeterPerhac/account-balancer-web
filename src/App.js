import React from 'react';
import './App.css';

function App() {

    return (
        <div className="App">
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

            <div className="container">
                <div className="row">
                    <div>
                        <label>
                            Select date range:
                            <input type="text" id="date-range" size="30" />
                        </label>
                    </div>
                </div>
                <p>Balance across accounts</p>
                <div className="row">
                    <div className="col-12">
                        <div className="chart" id="balance-totals-chart"/>
                        <ul>
                            <li>Last value: <span id="balance-totals-last-value">&nbsp;</span></li>
                        </ul>
                    </div>
                </div>
                <p>Money Spent</p>
                <div className="row">
                    <div className="col-6">
                        <div className="chart" id="money-spent-chart"/>
                        <ul>
                            <li>Last value: <span id="money-spent-last-value">&nbsp;</span></li>
                            <li>Difference of
                                <span id="money-spent-diff">&nbsp;</span>
                                over
                                <span id="money-spent-days">&nbsp;</span>
                                days. Gradient:
                                <span id="money-spent-gradient">&nbsp;</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="chart" id="money-spent-chart-with-expenses"/>
                        <ul>
                            <li>Last value: <span id="money-spent-with-expenses-last-value">&nbsp;</span></li>
                            <li>Difference of
                                <span id="money-spent-with-expenses-diff">&nbsp;</span>
                                over
                                <span id="money-spent-with-expenses-days">&nbsp;</span>
                                days. Gradient:
                                <span id="money-spent-with-expenses-gradient">&nbsp;</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>Money Burn</p>
                <div className="row">
                    <div className="col-6">
                        <div className="chart" id="money-burn-chart"/>
                        <ul>
                            <li>Last value: <span id="money-burn-last-value">&nbsp;</span></li>
                            <li>Average:
                                <span id="money-burn-average-value">&nbsp;</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="chart" id="money-burn-chart-with-expenses"/>
                        <ul>
                            <li>Last value: <span id="money-burn-with-expenses-last-value">&nbsp;</span></li>
                            <li>Average:
                                <span id="money-burn-with-expenses-average-value">&nbsp;</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="footer panel-footer">
                    <p>© 2019 Peter Perhac</p>
                </section>
            </div>
        </div>
    );

}

export default App;
