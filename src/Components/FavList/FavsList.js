import ViewShot, { captureRef } from 'react-native-view-shot';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlatList, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Share from 'react-native-share';
import { getThemeColor } from '../../Utils/Helper';
import EmptyComponent from '../EmptyComponent';
import VerseComponent from '../VerseComponent';
import FavItem from './FavItem';

const FavsList = ( { verses, type } ) => {
  const { favs } = useSelector( state => state.fav );
  const { darkMode } = useSelector( state => state.app );

  const { t } = useTranslation()

  const [ itemToShare, setItemToShare ] = useState( favs[ 0 ] )
  const [ loading, setLoading ] = useState( false );

  const screenShotRef = useRef();


  const handleOnPressShare = async ( item ) => {
    setLoading( true )
    setItemToShare( item )
    try {
      const uri = await captureRef( screenShotRef, {
        format: 'png',
        quality: 0.7,
      } );
      await Share.open( { url: uri } );
    } catch ( e ) {
      console.log( e );
    }
    setLoading( false )
  };


  return (
    <>
      <Spinner visible={loading} />
      <FlatList
        style={{ zIndex: 1, backgroundColor: getThemeColor( darkMode ).white, }}
        data={type === 1 ? favs : verses}
        renderItem={( { item } ) => <FavItem item={item} type={type} onPressShare={( item ) => handleOnPressShare( item )} />}
        keyExtractor={item => item.idx}
        ListEmptyComponent={<EmptyComponent text={t( '39' )} onPressRefresh={type === 1 ? null : () => { }} />}
      />
      <View style={{ height: "100%", position: 'absolute', zIndex: -1 }} >
        <ViewShot style={{ flex: 1 }} ref={screenShotRef}>
          <VerseComponent item={itemToShare} />
        </ViewShot>
      </View>

    </>
  );
};

export default FavsList;
