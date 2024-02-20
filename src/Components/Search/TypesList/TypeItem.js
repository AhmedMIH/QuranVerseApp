import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  getColorTheme,
  getFontSize,
  getRandomColor,
  responsiveHeight,
  responsiveWidth,
} from '../../../Utils/Helper';
import {useNavigation} from '@react-navigation/native';

const TypeItem = ({item, index}) => {
  const bg = getRandomColor();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={index}
      style={style(bg).container}
      onPress={() => {
        navigation.navigate('VerseType', {type: item});
      }}>
      <Text style={style().title}>{item}</Text>
    </TouchableOpacity>
  );
};

const style = bg =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: responsiveHeight(24),
      backgroundColor: bg,
      height: responsiveHeight(88),
      width: responsiveWidth(154),
      borderRadius: 8,
    },
    title: {
      fontWeight: '500',
      fontSize: getFontSize(14),
      lineHeight: 20,
      letterSpacing: 0.1,
      color: getColorTheme().darkPrimary,
    },
  });

export default TypeItem;
