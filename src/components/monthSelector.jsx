import React, {Component} from 'react';
import Spinner from './spinner'

class C3Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
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

    render() {
        if (this.state.isLoading) {
            return <Spinner width="200" height="200" />;
        }
        const listItems = this.state.dataSource.months.map(month => {
            const link =
                "/?fromDate=" + month.range.fromDate
                + "&toDate=" + month.range.toDate;
            return (
                <li key={month.displayName}>
                    <a href={link}>{month.displayName}</a>
                </li>
            );
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default C3Chart;