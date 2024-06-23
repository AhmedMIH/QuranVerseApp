import { FlatList, Platform, StyleSheet } from 'react-native';
import React from 'react';
import TypeItem from './TypeItem';
import EmptyComponent from '../../EmptyComponent';
import { useTranslation } from 'react-i18next';
import {responsiveHeight} from '../../../Utils/Helper';

const index = ({tags, onRefresh}) => {
  const {t} = useTranslation();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{flex: 1, marginTop: responsiveHeight(16)}}
      contentContainerStyle={{
        paddingHorizontal: Platform.OS === 'ios' ? 16 : null,
        gap: 16,
      }}
      numColumns={2} // set number of columns
      columnWrapperStyle={style.row} // space them out evenly
      data={tags}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => <TypeItem index={index} item={item} />}
      ListEmptyComponent={
        <EmptyComponent text={t(37)} onPressRefresh={onRefresh} />
      }
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
