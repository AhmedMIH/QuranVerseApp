import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import { connect } from 'react-redux';
import {changeLanguage} from '../../../Redux/Actions';
import styles from '../styles';
import { getThemeColor } from '../../../Utils/Helper';

const index = ( { changeLanguage, isRTL, darkMode } ) => {
  const {t} = useTranslation();
  return (
    <View style={styles( darkMode ).innerContainer}>
      <Text style={styles( darkMode ).mainText}>{t( '11' )}</Text>
      <TouchableOpacity onPress={() => changeLanguage(isRTL)}>
        <MaterialIcons
          name="language"
          size={24}
          color={getThemeColor( darkMode ).darkPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({app}) => {
  return {
    isRTL: app.isRTL,
    darkMode: app.darkMode,

  };
};
const mapDispatchToProps = {
  changeLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
