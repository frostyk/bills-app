import React, {Component} from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import {getVisibleExpenses} from "../selectors/expenses";

class ExpenseList extends Component {
    render() {
        return (
            <div>
                <h1>Expense List</h1>
                {this.props.expenses.map((expense) =>
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
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);