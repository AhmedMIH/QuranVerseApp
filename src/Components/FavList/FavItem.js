import { View, Text, TouchableOpacity } from 'react-native';
import React, { forwardRef, useImperativeHandle } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeVerseFromFav } from '../../Redux/Actions';

import FavIcon from './FavIcon';
import styles from './styles';
import OptionMenu from './OptionMenu';

export default FavItem = forwardRef( ( props, ref ) => {
  const [ visible, setVisible ] = React.useState( false );
  const { darkMode, isRTL } = useSelector( state => state.app )
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openMenu = () => setVisible( true );

  const closeMenu = () => setVisible( false );
  const onPressFav = () => {
    dispatch( removeVerseFromFav( props.item ) );
  };

  const itemToShare = () => {
    return props.item
  }


  useImperativeHandle( ref, () => ( {
    item () {
      itemToShare();
    },
  } ) );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate( 'Verse', { item: props.item } )}
      style={styles( darkMode ).container}>
      <View style={{ width: '90%' }}>
        <Text numberOfLines={1} style={styles( darkMode ).verseText}>
          {isRTL ? props.item.verseAr : props.item.verse}
        </Text>
        <Text style={styles( darkMode ).surahText}>{props.item.surah}</Text>
      </View>
      {props.type === 1 ? (
        <OptionMenu
          visible={visible}
          closeMenu={closeMenu}
          openMenu={openMenu}
          onPressFav={onPressFav}
          onPressShare={() => props.onPressShare( props.item )}
        />
      ) : (
          <FavIcon item={props.item} style={{ height: 32, width: 32 }} />
      )}
    </TouchableOpacity>
  );
} )
