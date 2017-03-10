import * as types from './actionTypes';
import authorsApi from '../api/authorsApi';


export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return dispatch => {
        return authorsApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}
