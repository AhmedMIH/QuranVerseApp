import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { resetError } from '../../Redux/Actions';

const MyToast = () => {
    const { errorMessage } = useSelector( state => state.common );
    const dispatch = useDispatch();

    const showToast = text => {
        Toast.show( {
            type: 'error',
            text1: text,
        } );
    };

    useEffect( () => {
        if ( errorMessage.length > 0 ) {
            showToast( errorMessage );
            dispatch( resetError() );
        }
    }, [ errorMessage ] );

    return <></>;
};

export default MyToast;
