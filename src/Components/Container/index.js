import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';

const index = ({children, style}) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

export default index;
