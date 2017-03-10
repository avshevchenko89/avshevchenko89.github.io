import * as types from './actionTypes';
import booksApi from '../api/booksApi';


export function loadBooksSuccess(books) {
    return {type: types.LOAD_BOOKS_SUCCESS, books};
}

export function loadBooks() {
    return dispatch => {
        return booksApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            throw(error);
        });
    };
}
