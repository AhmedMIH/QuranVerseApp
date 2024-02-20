import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

const index = ({children, style}) => {
  return (
    <SafeAreaView
      style={[style, {marginTop: StatusBar.currentHeight, flex: 1}]}>
      {children}
    </SafeAreaView>
  );
};

export default index;
