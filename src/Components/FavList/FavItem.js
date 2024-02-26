import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {removeVerseFromFav} from '../../Redux/Actions';

import FavIcon from './FavIcon';
import styles from './styles';
import OptionMenu from './OptionMenu';

export default function FavItem({item, type}) {
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onPressFav = () => {
    dispatch(removeVerseFromFav(item));
  };

  const onPressShare = () => {};

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Verse', {item: item})}
      style={styles.container}>
      <View >
        <Text numberOfLines={1} style={styles.verseText}>
          {item.verse}
        </Text>
        <Text style={styles.surahText}>{item.surah}</Text>
      </View>
      {type === 1 ? (
        <OptionMenu
          visible={visible}
          closeMenu={closeMenu}
          openMenu={openMenu}
          onPressFav={onPressFav}
          onPressShare={onPressShare}
        />
      ) : (
        <FavIcon item={item} style={{height: 32, width: 32}} />
      )}
    </TouchableOpacity>
  );
}
