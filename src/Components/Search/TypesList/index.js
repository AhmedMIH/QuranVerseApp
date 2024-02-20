import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import TypeItem from './TypeItem';

const index = () => {
  const types = ['Honesty', 'Kindness', 'Charity', 'Greed'];
  return (
    <FlatList
      style={{flex: 1}}
      numColumns={2} // set number of columns
      columnWrapperStyle={style.row} // space them out evenly
      data={types}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => <TypeItem index={index} item={item} />}
    />
  );
};

const style = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default index;
