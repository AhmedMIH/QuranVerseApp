import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import React, {useRef, useState, useCallback, useMemo} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useTranslation} from 'react-i18next';
import EmptyComponent from '../EmptyComponent';
import VerseComponent from '../VerseComponent';

const VerseList = ({verses, onRefresh}) => {
  const {t} = useTranslation();
  const width = Dimensions.get('window').width;
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const boxWidth = scrollViewWidth;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = useRef(new Animated.ValueXY()).current;

  const handleLayout = useCallback(e => {
    setScrollViewWidth(e.nativeEvent.layout.width);
  }, []);

  const renderItem = useCallback(
    ({item}) => <VerseComponent key={item.id} item={item} haveExit={true} />,
    [],
  );

  const listEmptyComponent = useMemo(
    () => <EmptyComponent text={t(34)} onPressRefresh={onRefresh} />,
    [t, onRefresh],
  );

  if (verses?.length > 0) {
    return (
      <View style={styles.container}>
        <FlashList
          removeClippedSubviews
          data={verses}
          keyExtractor={item => item.id}
          horizontal
          renderItem={renderItem}
          estimatedItemSize={width}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={boxWidth}
          disableIntervalMomentum
          contentInset={{
            left: halfBoxDistance,
            right: halfBoxDistance,
          }}
          contentOffset={{x: halfBoxDistance * -1, y: 0}}
          onLayout={handleLayout}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: pan.x}}}],
            {useNativeDriver: false},
          )}
          ListEmptyComponent={listEmptyComponent}
          initialNumToRender={10}
        />
      </View>
    );
  }

  return <EmptyComponent text={t('38')} onPressRefresh={onRefresh} />;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default VerseList;
