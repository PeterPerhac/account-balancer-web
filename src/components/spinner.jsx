import React, {Component} from 'react';

class Spinner extends Component {

    render() {
        return (
            <div
                className="spinner"
                style={{width: this.props.width + 'px', height: this.props.height + 'px'}}>
                Loading...
            </div>
        );
    }
}

export default Spinner;