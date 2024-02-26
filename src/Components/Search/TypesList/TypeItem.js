import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getRandomColor} from '../../../Utils/Helper';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const TypeItem = ({item, index}) => {
  const bg = getRandomColor();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={index}
      style={styles(bg).container}
      onPress={() => {
        navigation.navigate('VerseType', {type: item});
      }}>
      <Text style={styles().title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TypeItem;
