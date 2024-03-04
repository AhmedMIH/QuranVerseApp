import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import {getColorTheme} from '../../../Utils/Helper';
import { useSelector } from 'react-redux';

const index = () => {
  const {t} = useTranslation();
  const { darkMode } = useSelector( ( state ) => state.app );

  return (
    <View style={styles( darkMode ).innerContainer}>
      <Text style={styles( darkMode ).mainText}>{t( '13' )}</Text>
      <TouchableOpacity>
        <Ionicons
          name="help-circle-outline"
          size={24}
          color={getColorTheme( darkMode ).darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
