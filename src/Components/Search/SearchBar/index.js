import React from 'react';
import {Searchbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import { useSelector } from 'react-redux';

const index = ({searchQuery, setSearchQuery, style}) => {
  const {t} = useTranslation();
  const { darkMode } = useSelector( state => state.app )

  return (
    <Searchbar
      style={[ styles( darkMode ).container, style ]}
      placeholder={t(16)}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default index;
