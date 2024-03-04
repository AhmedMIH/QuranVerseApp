import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getRandomColor} from '../../../Utils/Helper';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { useSelector } from 'react-redux';

const TypeItem = ({item, index}) => {
  const bg = getRandomColor();
  const navigation = useNavigation();
  const { darkMode } = useSelector( state => state.app )

  return (
    <TouchableOpacity
      key={index}
      style={styles( bg, darkMode ).container}
      onPress={() => {
        navigation.navigate('VerseType', {type: item});
      }}>
      <Text style={styles( null, darkMode ).title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TypeItem;
