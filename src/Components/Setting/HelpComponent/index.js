import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import {getColorTheme} from '../../../Utils/Helper';

const index = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.mainText}>{t('13')}</Text>
      <TouchableOpacity>
        <MaterialIcons
          name="expand-more"
          size={24}
          color={getColorTheme().darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
