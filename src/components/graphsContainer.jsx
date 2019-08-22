import React, {Component} from 'react';
import MonthSelector from "./monthSelector";
import C3Chart from "./c3Chart";


class GraphsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateRange: {
                fromDate: "2019-01-01",
                toDate: "2099-12-31"
            }
        };
        this.updateDateRange = this.updateDateRange.bind(this)
    }

    updateDateRange = range => this.setState({dateRange: range});

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div>
                        Month selection: <MonthSelector updateDateRange={this.updateDateRange}/>
                    </div>
                </div>
                <p>Balance across accounts</p>
                <div className="row">
                    <div className="col-12">
                        <C3Chart dataSource="/api/chart-data/balance-totals"
                                 dateRange={this.state.dateRange}/>
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
            </React.Fragment>
        );
    }

}

export default GraphsContainer;

