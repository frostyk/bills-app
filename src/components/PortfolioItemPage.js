import React, {Component} from 'react';

class PortfolioItemPage extends Component {
    render() {
        return (
            <div>
                <h2>A thing I've done</h2>
                <p>This page is for the item with id of {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default PortfolioItemPage;