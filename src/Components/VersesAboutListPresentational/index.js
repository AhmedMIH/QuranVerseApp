import { View, Text } from 'react-native';
import React from 'react';
import FavsList from '../FavList/FavsList';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getColorTheme } from '../../Utils/Helper';

const index = ( { verses, type } ) => {
  const { darkMode } = useSelector( state => state.app )
  const { t } = useTranslation()

  if ( verses?.length > 0 ) {
    return <FavsList verses={verses} type={type} />;
  }
  return <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: getColorTheme( darkMode ).text }}>{t( 34 )}</Text>
  </View>;
};

export default index;
