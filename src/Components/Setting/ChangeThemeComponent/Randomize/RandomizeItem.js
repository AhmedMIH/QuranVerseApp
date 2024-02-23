import {TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {
  getColorTheme,
  getFontSize,
  getRandomNumber,
  responsiveHeight,
  responsiveWidth,
} from '../../../../Utils/Helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {changeBackground} from '../../../../Redux/Actions';
import ListImageOver from './ListImageOver';

const RandomizeItem = ({item, index, onToggle}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const onPressItem = () => {
    dispatch(changeBackground(index + 1, item[getRandomNumber(0, 5)]));
    onToggle();
  };
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={{
        height: responsiveHeight(150),
        width: responsiveWidth(95),
        backgroundColor: getColorTheme().seashell,
        marginRight: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: getFontSize(14),
            lineHeight: 20,
            fontWeight: '400',
            letterSpacing: 0.25,
            color: getColorTheme().darkPrimary,
          }}>
          {t('31')}
        </Text>
        <MaterialIcons
          name="360"
          size={24}
          color={getColorTheme().darkPrimary}
        />
      </View>
      <Text
        style={{
          fontSize: getFontSize(14),
          lineHeight: 20,
          fontWeight: '400',
          letterSpacing: 0.25,
          color: getColorTheme().darkPrimary,
        }}>
        {index === 0 ? t('29') : t('30')}
      </Text>
      <ListImageOver list={item.slice(0, 3)} type={index + 1} />
    </TouchableOpacity>
  );
};

export default RandomizeItem;
