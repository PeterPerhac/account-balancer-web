import React, {Component} from 'react';
import Spinner from './spinner'

class MonthSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        return fetch('/api/dates', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                dataSource: data,
                isLoading: false,
            }))
            .catch(error => console.error(error));
    }

    handleChange(e) {
        const range = this.state.dataSource.months[e.target.value].range;
        this.props.updateDateRange(range);
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner width="20" height="20"/>;
        }
        const listItems = this.state.dataSource.months.map((month, index) =>
            <option key={month.displayName} value={index}>{month.displayName}</option>
        );
        return (
            <select onChange={this.handleChange}>{listItems}</select>
        );
    }
}

export default MonthSelector;