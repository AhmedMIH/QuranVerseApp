import { RESET_ERROR, SET_ERROR } from '../Actions/Types';

const INIT_STATE = {
    errorMessage: '',
};

export const commonReducer = ( state = INIT_STATE, action ) => {
    switch ( action.type ) {
        case SET_ERROR:
            return {
                errorMessage: action.payload,
            };
        case RESET_ERROR:
            return { errorMessage: '' };
        default:
            return state;
    }
};