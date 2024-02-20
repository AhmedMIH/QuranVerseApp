import React from 'react';
import {useTranslation} from 'react-i18next';
import FavsList from '../Components/FavList/FavsList';
import Header from '../Components/Header';
import Container from '../Components/Container';

const FavoritesScreen = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Header title={t('15')} />
      <FavsList type={1} />
    </Container>
  );
};

export default FavoritesScreen;
