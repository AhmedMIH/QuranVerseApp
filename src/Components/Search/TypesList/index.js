import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import TypeItem from './TypeItem';
import EmptyComponent from '../../EmptyComponent';

const index = ( { tags } ) => {

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      numColumns={2} // set number of columns
      columnWrapperStyle={style.row} // space them out evenly
      data={tags}
      keyExtractor={( item, index ) => item.id}
      renderItem={( { item, index } ) => <TypeItem index={index} item={item} />}
      ListEmptyComponent={<EmptyComponent text={'No Types'} />}

    />
  );
};

const style = StyleSheet.create( {
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
} );
export default index;
