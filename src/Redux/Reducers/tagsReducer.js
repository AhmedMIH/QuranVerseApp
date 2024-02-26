import {
    GET_TAGS_START,
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILED,
    GET_TAGS_VERSES_START,
    GET_TAGS_VERSES_SUCCESS,
    GET_TAGS_VERSES_FAILED,
} from '../Actions/Types';

const INIT_STATE = {
    tags: [],
    verses: [],
    error: null,
    loading: false,
    next: null,
    page: 1,
};

export default ( state = INIT_STATE, action ) => {
    switch ( action.type ) {
        case GET_TAGS_START:
            return {
                ...state, loading: true, error: null, tags: [],
                verses: [],
            };
        case GET_TAGS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                tags: [ ...state.tags, ...action.payload.tags ],
                next: action.payload.next,
                page: state.page + 1,
            };
        case GET_TAGS_FAILED:
            return {
                ...state, loading: false, error: action.payload, tags: [],
                verses: [],
            };
        case GET_TAGS_VERSES_START:
            return { ...state, loading: true, error: null, verses: [] };
        case GET_TAGS_VERSES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                verses: [ ...action.payload.verses ],
            };
        case GET_TAGS_VERSES_FAILED:
            return { ...state, loading: false, error: action.payload, verses: [] };
        default:
            return state;
    }
};
