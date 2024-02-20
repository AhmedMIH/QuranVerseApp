import {View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Header from '../Components/Header';
import Container from '../Components/Container';
import SettingList from '../Components/Setting/SettingList';

const SettingScreen = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Header title={t('7')} haveBack={false} />
      <SettingList />
    </Container>
  );
};

export default SettingScreen;
