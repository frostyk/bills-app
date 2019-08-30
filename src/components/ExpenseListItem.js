import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ExpenseListItem extends Component {
    render() {
        return (
            <div>
                <Link to={`edit/${this.props.id}`} >
                    <h3>Description: {this.props.description}</h3>
                </Link>
                <p>Amount: {this.props.amount}</p>
                <p>CreatedAt: {this.props.createdAt}</p>
                <hr/>
            </div>
        );
    }
}


export default ExpenseListItem;