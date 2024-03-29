import {
  GET_VERSES_START,
  GET_VERSES_SUCCESS,
  GET_VERSES_FAILED,
} from '../Actions/Types';

const INIT_STATE = {
  verses: [],
  error: null,
  loading: false,
  next: null,
  page: 1,
};

export default ( state = INIT_STATE, action ) => {
  switch ( action.type ) {
    case GET_VERSES_START:
      return { ...state, loading: true, error: null };
    case GET_VERSES_SUCCESS:
      return {
        loading: false,
        error: null,
        verses: [ ...state.verses, ...action.payload.verses ],
        next: action.payload.next,
        page: state.page + 1,
      };
    case GET_VERSES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
