import apiClient from '../../Api/Apiclient';
import {GET_VERSES_START, GET_VERSES_SUCCESS, GET_VERSES_FAILED} from './Types';

export function getVerses(page) {
  return async dispatch => {
    dispatch({
      type: GET_VERSES_START,
    });
    apiClient
      .get('beers', {
        page: page,
        per_page: 10,
      })
      .then(response => {
        if (response.ok) {
          dispatch({
            type: GET_VERSES_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({
            type: GET_VERSES_FAILED,
            payload: response.data,
          });
        }
      })
      .catch(err => {
        dispatch({
          type: GET_VERSES_FAILED,
          payload: err,
        });
      });
  };
}
