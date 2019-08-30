import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from "react-redux";
import moment from "moment";

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: moment()}));
store.dispatch(addExpense({description: 'Gas bill', amount: 3000, createdAt: moment()}));


store.dispatch(addExpense({description: 'Rent', createdAt: moment()}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
