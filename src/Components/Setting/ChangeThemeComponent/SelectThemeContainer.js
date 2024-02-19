import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveHeight} from '../../../Utils/Helper';

const SelectThemeContainer = () => {
  return (
    <View style={{}}>
      <Text>Pick a Color</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveHeight(47),
  },
});
export default SelectThemeContainer;
