import {FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FavItem from './FavItem';

const FavsList = () => {
  const {favs} = useSelector(state => state.fav);
  return (
    <FlatList
      data={favs}
      renderItem={({item}) => <FavItem item={item} />}
      keyExtractor={item => item.idx}
    />
  );
};

export default FavsList;
