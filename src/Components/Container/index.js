import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {getColorTheme} from '../../Utils/Helper';

const index = ({children, style}) => {
  return (
    <SafeAreaView
      style={[
        style,
        {
          marginTop: StatusBar.currentHeight,
          flex: 1,
          backgroundColor: getColorTheme().white,
        },
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default index;
