import {
  ADD_VERSE_TO_FAV_START,
  ADD_VERSE_TO_FAV_SUCCESS,
  REMOVE_VERSE_TO_FAV_START,
  REMOVE_VERSE_TO_FAV_SUCCESS,
} from './Types';

export function addVerseToFav(verse) {
  return async dispatch => {
    dispatch({
      type: ADD_VERSE_TO_FAV_START,
    });
    dispatch({
      type: ADD_VERSE_TO_FAV_SUCCESS,
      payload: verse,
    });
  };
}

export function removeVerseFromFav(verse) {
  return async dispatch => {
    dispatch({
      type: REMOVE_VERSE_TO_FAV_START,
    });
    dispatch({
      type: REMOVE_VERSE_TO_FAV_SUCCESS,
      payload: verse,
    });
  };
}
