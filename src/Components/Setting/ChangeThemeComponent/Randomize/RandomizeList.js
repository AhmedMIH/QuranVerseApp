import {FlatList, I18nManager, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {responsiveHeight} from '../../../../Utils/Helper';
import RandomizeItem from './RandomizeItem';

const RandomizeList = ({title, data, onToggle}) => {
  return (
    <View style={{marginTop: responsiveHeight(32)}}>
      <Text style={styles.modalItemTitle}>{title}</Text>
      <FlatList
        style={{marginTop: 20}}
        inverted={I18nManager.isRTL}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => (
          <RandomizeItem
            item={item}
            index={index}
            key={index}
            onToggle={onToggle}
          />
        )}
      />
    </View>
  );
};

export default RandomizeList;
