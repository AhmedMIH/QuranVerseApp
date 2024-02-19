import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {changeTheme} from './Redux/Actions';
import {useTranslation} from 'react-i18next';
const Login = ({changeTheme, darkMode}) => {
  const {t} = useTranslation();

  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          await changeTheme(darkMode);
        }}>
        <Text>{t('1')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({app}) => {
  const {loading, error, darkMode} = app;
  return {
    loading,
    error,
    darkMode,
  };
};

export default connect(mapStateToProps, {
  changeTheme,
})(Login);
