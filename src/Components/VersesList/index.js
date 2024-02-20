import {Animated, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import VerseComponent from '../VerseComponent';

const index = ({verses}) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const boxWidth = scrollViewWidth * 1;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = useRef(new Animated.ValueXY()).current;

  return (
    <FlatList
      data={verses}
      keyExtractor={item => item.id}
      horizontal
      renderItem={({item, index}) => (
        <VerseComponent
          item={item}
          pan={pan}
          halfBoxDistance={halfBoxDistance}
          boxWidth={boxWidth}
          index={index}
        />
      )}
      onEndReached={() => {
        // getVerses(page + 1);
        // setPage(page + 1);
      }}
      onEndReachedThreshold={verses.length - 5}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={boxWidth}
      contentInset={{
        left: halfBoxDistance,
        right: halfBoxDistance,
      }}
      contentOffset={{x: halfBoxDistance * -1, y: 0}}
      onLayout={e => {
        setScrollViewWidth(e.nativeEvent.layout.width);
      }}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: pan.x}}}], {
        useNativeDriver: false,
      })}
    />
  );
};

export default index;
