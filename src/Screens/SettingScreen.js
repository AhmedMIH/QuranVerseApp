import {View, Text} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {useTranslation} from 'react-i18next';
import SettingList from '../Components/Setting/SettingList';

const SettingScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1}}>
      <Header title={t('7')} haveBack={false} />
      <SettingList />
    </View>
  );
};

export default SettingScreen;
