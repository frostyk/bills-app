import React, {Component} from 'react';
import {connect} from "react-redux";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import {DateRangePicker} from "react-dates";

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null
    }

    onTextFilterChange = (event) => {
        this.props.dispatch(setTextFilter(event.target.value))
    }

    onSortByChange = ({target}) => {
        if (target.value === 'date') {
            this.props.dispatch(sortByDate())
        }  else {
            this.props.dispatch(sortByAmount())
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render() {
        return (
            <div>
                <input value={this.props.filters.text} type="text" onChange={this.onTextFilterChange}/>
                <select onChange={this.onSortByChange} value={this.props.filters.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId="start"
                    endDateId="end"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);