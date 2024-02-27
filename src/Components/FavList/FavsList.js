import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavItem from './FavItem';
import EmptyComponent from '../EmptyComponent';

const FavsList = ({verses, type}) => {
  const {favs} = useSelector(state => state.fav);
  return (
    <FlatList
      data={type === 1 ? favs : verses}
      renderItem={({item}) => <FavItem item={item} type={type} />}
      keyExtractor={item => item.idx}
      ListEmptyComponent={<EmptyComponent text={'No Favorites'} />}
    />
  );
};

export default FavsList;
