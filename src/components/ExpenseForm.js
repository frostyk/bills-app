import React, {Component} from 'react';
import moment from 'moment'
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

class ExpenseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({
            description
        }))
    }
    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({
            note
        }))
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount.'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                           placeholder="Description"
                           value={this.state.description}
                           onChange={this.onDescriptionChange}
                           autoFocus/>
                    <input
                        onChange={this.onAmountChange}
                        type="number"
                        value={this.state.amount}
                        placeholder="Amount"/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea value={this.state.note} onChange={this.onNoteChange}
                              placeholder="Add a note for your expense (optional)">
                    </textarea>
                    <button type="submit">Add expense</button>

                </form>
            </div>
        );
    }
}

export default ExpenseForm;