import {View, Text} from 'react-native';
import React from 'react';
import {responsiveHeight} from '../../Utils/Helper';

export default function index({height = 16}) {
  return <View style={{height: responsiveHeight(height)}} />;
}
