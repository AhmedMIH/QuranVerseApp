import {View, Text} from 'react-native';
import React from 'react';
import FavsList from '../FavList/FavsList';

const index = ({verses, type}) => {
  return <FavsList verses={verses} type={type} />;
};

export default index;
