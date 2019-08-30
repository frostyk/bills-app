import React from 'react';
import numeral from "numeral";
import {getVisibleExpenses} from "../selectors/expenses";
import {countExpensesTotalAmount} from "../selectors/expenses-total";
import {connect} from "react-redux";

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h3>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal / 100).format('$0,0.00')} </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: state.expenses.length,
        expensesTotal: countExpensesTotalAmount(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);