import React from 'react';
import {Searchbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import { useSelector } from 'react-redux';
import {getThemeColor} from '../../../Utils/Helper';

const index = ({searchQuery, setSearchQuery, style}) => {
  const {t} = useTranslation();
  const {darkMode} = useSelector(state => state.app);

  return (
    <Searchbar
      style={[styles(darkMode).container, style]}
      iconColor={getThemeColor(darkMode).text}
      placeholder={t(16)}
      placeholderTextColor={getThemeColor(darkMode).text}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default index;
