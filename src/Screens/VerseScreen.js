import {View, Text} from 'react-native';
import React from 'react';
import VerseComponent from '../Components/VerseComponent';

const VerseScreen = ({
  route: {
    params: {item},
  },
}) => {
  console.log(item);
  return <VerseComponent item={item} />;
};

export default VerseScreen;
