import React from 'react';
import { useTranslation } from 'react-i18next';
import FavsList from '../Components/FavList/FavsList';
import Header from '../Components/Header';
import Container from '../Components/Container';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector } from 'react-redux';
import {responsiveHeight} from '../Utils/Helper';

const FavoritesScreen = () => {
  const {t} = useTranslation();
  const {loading} = useSelector(state => state.fav);
  return (
    <Container style={{paddingBottom: responsiveHeight(90)}}>
      <Header title={t('15')} />
      <Spinner visible={loading} />
      <FavsList type={1} />
    </Container>
  );
};

export default FavoritesScreen;
