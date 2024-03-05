import apiClient from '../../Api/Apiclient';
import { GET_VERSES_START, GET_VERSES_SUCCESS, GET_VERSES_FAILED } from './Types';
import { errorHandling } from '../Actions'

export function getVerses ( page ) {
  return async dispatch => {
    dispatch( {
      type: GET_VERSES_START,
    } );
    apiClient
      .get( 'getVerses', {
        page: page,
      } )
      .then( response => {
        if ( response.ok ) {
          dispatch( {
            type: GET_VERSES_SUCCESS,
            payload: response.data,
          } );
        } else {
          dispatch( {
            type: GET_VERSES_FAILED,
            payload: response.data,
          } );
          dispatch( errorHandling( "35" ) )
        }
      } )
      .catch( err => {
        dispatch( {
          type: GET_VERSES_FAILED,
          payload: err,
        } );
      } );
  };
}
