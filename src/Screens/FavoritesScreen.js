import React from 'react';
import FavsList from '../Components/FavList/FavsList';
import Header from '../Components/Header';
import {useTranslation} from 'react-i18next';

const FavoritesScreen = () => {
  const {t} = useTranslation();
  return (
    <>
      <Header title={t('15')} />
      <FavsList />
    </>
  );
};

export default FavoritesScreen;
