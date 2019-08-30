import React, {Component} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';

class ExpenseListItem extends Component {
    render() {
        return (
            <div>
                <Link to={`edit/${this.props.id}`}>
                    <h3>Description: {this.props.description}</h3>
                </Link>
                <p>
                    {numeral(this.props.amount / 100).format('$0,0.00')}
                    -
                    {moment(this.props.createdAt).format('MMM Do, YYYY')}</p>
                <hr/>
            </div>
        );
    }
}


export default ExpenseListItem;