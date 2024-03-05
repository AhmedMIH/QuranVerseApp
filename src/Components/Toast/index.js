import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { resetError } from '../../Redux/Actions';
import { useTranslation } from 'react-i18next';

const MyToast = () => {
    const { errorMessage } = useSelector( state => state.common );
    const dispatch = useDispatch();
    const { t } = useTranslation()
    const message = t( errorMessage )

    const showToast = text => {
        Toast.show( {
            type: 'error',
            text1: text,
        } );
    };

    useEffect( () => {
        if ( message.length > 0 ) {
            showToast( message );
            dispatch( resetError() );
        }
    }, [ errorMessage ] );

    return <></>;
};

export default MyToast;
