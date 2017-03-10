import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { loadBooks } from './actions/booksActions'
import { loadAuthors } from './actions/authorsActions'
import './styles/reset.less';
import './styles/styles.less';

const store = configureStore();
store.dispatch(loadBooks());
store.dispatch(loadAuthors());

render(
    <Provider store={ store }>
        <Router history={ hashHistory } routes={ routes } />
    </Provider>,
    document.getElementById('app')
);
