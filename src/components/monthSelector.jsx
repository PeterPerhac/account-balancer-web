import React, {Component} from 'react';

class MonthSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    componentDidMount() {
        return fetch('/api/dates',{
            headers : {
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

    render() {
        if (this.state.isLoading) {
            return <p>Hello</p>
        }
        const listItems = this.state.dataSource.months.map(month =>
            <li key={month.displayName}>{month.displayName}</li>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default MonthSelector;