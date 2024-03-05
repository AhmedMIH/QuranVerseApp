import apiClient from '../../Api/Apiclient';
import { GET_TAGS_FAILED, GET_TAGS_START, GET_TAGS_SUCCESS, GET_TAGS_VERSES_FAILED, GET_TAGS_VERSES_SUCCESS, GET_TAGS_VERSES_START } from './Types';


export function getTags ( page ) {
    return async dispatch => {
        dispatch( {
            type: GET_TAGS_START,
        } )
        apiClient
            .get( 'getTags', {
                page: page,
            } )
            .then( response => {
                if ( response.ok ) {
                    dispatch( {
                        type: GET_TAGS_SUCCESS,
                        payload: response.data,
                    } );
                } else {
                    dispatch( {
                        type: GET_TAGS_FAILED,
                        payload: response.data,
                    } );
                }
            } )
            .catch( err => {
                dispatch( {
                    type: GET_TAGS_FAILED,
                    payload: err,
                } );
            } );
    }
}

export function getTagVerses ( tagId ) {
    return async dispatch => {
        dispatch( {
            type: GET_TAGS_VERSES_START,
        } );
        console.log( "getTagVerses 2" )

        apiClient
            .get( 'getVerses', {
                page: 1,
                tag: tagId,
            } )
            .then( response => {
                if ( response.ok ) {
                    dispatch( {
                        type: GET_TAGS_VERSES_SUCCESS,
                        payload: response.data,
                    } );
                } else {
                    dispatch( {
                        type: GET_TAGS_VERSES_FAILED,
                        payload: response.data,
                    } );
                }
            } )
            .catch( err => {
                dispatch( {
                    type: GET_TAGS_VERSES_FAILED,
                    payload: err,
                } );
            } );
    };
}
