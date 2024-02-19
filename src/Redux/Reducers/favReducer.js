import {
  ADD_VERSE_TO_FAV_START,
  ADD_VERSE_TO_FAV_SUCCESS,
  ADD_VERSE_TO_FAV_FAILED,
  REMOVE_VERSE_TO_FAV_START,
  REMOVE_VERSE_TO_FAV_SUCCESS,
  REMOVE_VERSE_TO_FAV_FAILED,
} from '../Actions/Types';

const INIT_STATE = {
  favs: [],
  error: null,
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_VERSE_TO_FAV_START:
      return {...state, loading: true, error: null};
    case ADD_VERSE_TO_FAV_SUCCESS:
      if (isExist(action.payload, state.favs)) {
        return state;
      } else {
        return {
          loading: false,
          error: null,
          favs: [...state.favs, action.payload],
        };
      }
    case ADD_VERSE_TO_FAV_FAILED:
      return {...state, loading: false, error: action.payload};

    case REMOVE_VERSE_TO_FAV_START:
      return {...state, loading: true, error: null};
    case REMOVE_VERSE_TO_FAV_SUCCESS:
      console.log(state.favs);
      console.log(
        'handleRemoveVerse',
        handleRemoveVerse(action.payload, state.favs),
      );
      return {
        loading: false,
        error: null,
        favs: handleRemoveVerse(action.payload, state.favs),
      };
    case REMOVE_VERSE_TO_FAV_FAILED:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

const handleRemoveVerse = (itemToRemove, verses) =>
  verses.filter(item => item.id !== itemToRemove.id);

const isExist = (item, verses) => {
  for (let i = 0; i < verses.length; i++) {
    if (verses[i].id === item.id) {
      return true;
    }
  }
  return false;
};
