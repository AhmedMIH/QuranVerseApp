import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Switch} from 'react-native-paper';
import {connect} from 'react-redux';
import styles from '../styles';
import {getColorTheme} from '../../../Utils/Helper';
import {changeMode} from '../../../Redux/Actions';

const index = ({changeMode, darkMode}) => {
  const {t} = useTranslation();
  const onToggleSwitch = () => {
    changeMode(darkMode);
  };
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.mainText}>{t('9')}</Text>
      <Switch
        value={darkMode}
        onValueChange={onToggleSwitch}
        color={getColorTheme().fillProgressBar}
      />
    </View>
  );
};

const mapStateToProps = ({app}) => {
  return {
    darkMode: app.darkMode,
  };
};
const mapDispatchToProps = {
  changeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
