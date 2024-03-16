import { SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import styles from './styles';

const index = ( { children, style } ) => {
  const { darkMode } = useSelector( state => state.app )
  return (
    <SafeAreaView style={[ style, styles( darkMode ).container ]}>
      <StatusBar translucent />
      {children}
      </SafeAreaView>
  );
};

export default index;
