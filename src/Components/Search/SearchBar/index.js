import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {getColorTheme, responsiveHeight} from '../../../Utils/Helper';
import {useTranslation} from 'react-i18next';

const index = ({searchQuery, setSearchQuery, style}) => {
  const {t} = useTranslation();
  return (
    <Searchbar
      style={[
        {
          marginTop: responsiveHeight(16),
          backgroundColor: getColorTheme().moreLight,
        },
        style,
      ]}
      placeholder={t(16)}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default index;

const styles = StyleSheet.create({});
