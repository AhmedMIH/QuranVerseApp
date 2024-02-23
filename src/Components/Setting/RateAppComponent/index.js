import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import {getColorTheme, getRateAppLink} from '../../../Utils/Helper';

const index = () => {
  const {t} = useTranslation();
  const handleClick = () => {
    Linking.canOpenURL(getRateAppLink()).then(
      supported => {
        supported && Linking.openURL(getRateAppLink());
      },
      err => console.log(err),
    );
  };
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.mainText}>{t('14')}</Text>
      <TouchableOpacity onPress={() => handleClick()}>
        <MaterialIcons
          name="star-outline"
          size={24}
          color={getColorTheme().darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;
