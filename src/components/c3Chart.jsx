import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import Spinner from './spinner'
import 'c3/c3.min.css';

let c3;

class C3Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        };
    }

    componentWillUnmount() {
        try {
            this.chart = this.chart.destroy();
        } catch (err) {
            throw new Error('Internal C3 error', err);
        }
    }


    componentDidMount() {
        c3 = require('c3');
    }

    render() {
        const generateChart = (mountNode, config) => {
            const newConfig = Object.assign({
                "bindto": mountNode,
                "size": {"height": 400},
                "point": {"show": false},
                "axis": {"x": {"type": "timeseries", "tick": {"format": "%Y-%m-%d"}}}
            }, config);
            return c3.generate(newConfig);
        };

        if (this.state.isLoading) {
            fetch(`${this.props.dataSource}?fromDate=${encodeURIComponent(this.props.dateRange.fromDate)}&toDate=${encodeURIComponent(this.props.dateRange.toDate)}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        dataSource: data,
                        isLoading: false,
                    });
                    this.chart = generateChart(findDOMNode(this), {data: this.state.dataSource});
                })
                .catch(error => console.error(error));
            return <Spinner width="200" height="200"/>;
        } else {
            return <div />;
        }
    }
}

export default C3Chart;