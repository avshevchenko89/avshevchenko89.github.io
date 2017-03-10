import { combineReducers } from 'redux';
import books from './booksReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({
    books,
    authors
});

export default rootReducer;
