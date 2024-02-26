import { View, Text } from 'react-native';
import React from 'react';
import FavsList from '../FavList/FavsList';

const index = ( { verses, type } ) => {
  if ( verses?.length > 0 ) {
    return <FavsList verses={verses} type={type} />;
  }
  return <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, }}>No Verses</Text>
  </View>;
};

export default index;
