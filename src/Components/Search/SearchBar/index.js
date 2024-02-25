import React from 'react';
import {Searchbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import styles from './styles';

const index = ({searchQuery, setSearchQuery, style}) => {
  const {t} = useTranslation();
  return (
    <Searchbar
      style={[styles.container, style]}
      placeholder={t(16)}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default index;
