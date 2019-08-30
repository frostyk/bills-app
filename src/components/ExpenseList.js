import React, {Component} from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

class ExpenseList extends Component {
    render() {
        return (
            <div>
                <h1>Expense List</h1>
                {this.props.expenses.map((expense, index) =>
                   <ExpenseListItem key={expense.id}
                                    {...expense}
                   />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);