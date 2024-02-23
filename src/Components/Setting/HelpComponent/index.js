import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import {getColorTheme} from '../../../Utils/Helper';

const index = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.mainText}>{t('13')}</Text>
      <TouchableOpacity>
        <Ionicons
          name="help-circle-outline"
          size={24}
          color={getColorTheme().darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
