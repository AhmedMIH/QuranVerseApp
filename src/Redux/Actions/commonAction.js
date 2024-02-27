import { RESET_ERROR, SET_ERROR } from "./Types";

export function errorHandling ( message, ) {
    return async dispatch =>
        dispatch( {
            type: SET_ERROR,
            payload: message,
        } )
}

export function resetError () {
    return async dispatch => {
        dispatch( {
            type: RESET_ERROR,
        } );
    };
}