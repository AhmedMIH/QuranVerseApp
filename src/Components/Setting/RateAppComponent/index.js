import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import { getThemeColor, getRateAppLink } from '../../../Utils/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { errorHandling } from '../../../Redux/Actions';

const index = () => {
  const {t} = useTranslation();
  const { darkMode } = useSelector( ( state ) => state.app );
  const dispatch = useDispatch()

  const handleClick = () => {
    Linking.canOpenURL(getRateAppLink()).then(
      supported => {
        supported && Linking.openURL(getRateAppLink());
      },
      err => dispatch( errorHandling( 35 ) )
    );
  };
  return (
    <View style={styles( darkMode ).innerContainer}>
      <Text style={styles( darkMode ).mainText}>{t( '14' )}</Text>
      <TouchableOpacity onPress={() => handleClick()}>
        <MaterialIcons
          name="star-outline"
          size={24}
          color={getThemeColor( darkMode ).darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
