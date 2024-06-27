import React from 'react';
import { useTranslation } from 'react-i18next';
import FavsList from '../Components/FavList/FavsList';
import Header from '../Components/Header';
import Container from '../Components/Container';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector } from 'react-redux';
import {getColorTheme, responsiveHeight} from '../Utils/Helper';
import { Platform, View } from 'react-native';

const FavoritesScreen = () => {
  const {t} = useTranslation();
  const {loading} = useSelector(state => state.fav);
  const { darkMode } = useSelector( ( state ) => state.app );

  return (
    <Container style={{paddingBottom: responsiveHeight(90)}}>
      <Header title={t('15')} />
      <Spinner visible={loading} />
      <FavsList type={1} />
      {Platform.OS === 'ios' &&
      <View style={{height:responsiveHeight(90),backgroundColor:getColorTheme(darkMode).white}}/>
  }
    </Container>
  );
};

export default FavoritesScreen;
