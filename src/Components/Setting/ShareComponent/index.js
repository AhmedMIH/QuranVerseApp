import {View, Text, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import {getAppUrl, getColorTheme} from '../../../Utils/Helper';
import { useSelector } from 'react-redux';

const index = () => {
  const {t} = useTranslation();
  const { darkMode } = useSelector( ( state ) => state.app );

  const onPressShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please install this app , AppLink :' + getAppUrl(),
        url: getAppUrl(),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles( darkMode ).innerContainer}>
      <Text style={styles( darkMode ).mainText}>{t( '12' )}</Text>
      <TouchableOpacity
        onPress={async () => {
          await onPressShare();
        }}>
        <MaterialCommunityIcons
          name="share-variant-outline"
          size={24}
          color={getColorTheme( darkMode ).darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
