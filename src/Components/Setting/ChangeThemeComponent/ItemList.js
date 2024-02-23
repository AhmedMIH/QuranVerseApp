import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Item from './Item';
import images from '../../../Images';
import {responsiveHeight} from '../../../Utils/Helper';

const ItemList = ({title, data, type, onToggle}) => {
  return (
    <View style={{marginTop: responsiveHeight(32)}}>
      <Text style={styles.modalItemTitle}>{title}</Text>
      <FlatList
        style={{marginTop: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <Item item={item} key={index} type={type} onToggle={onToggle} />
        )}
      />
    </View>
  );
};

export default ItemList;
