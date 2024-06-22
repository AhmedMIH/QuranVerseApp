import {Animated, Dimensions, I18nManager, View} from 'react-native';
import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {FlashList} from '@shopify/flash-list';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {getVerses} from '../../Redux/Actions';
import VerseComponent from '../VerseComponent';
import EmptyComponent from '../EmptyComponent';

const Index = ({verses, getVerses, next, page, loading}) => {
  const width = Dimensions.get('screen').width;
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const {t} = useTranslation();
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    getVerses(page);
  }, []);

  const getNextPage = useCallback(() => {
    if (next && !loading) {
      getVerses(page + 1);
    }
  }, [next, loading, getVerses, page]);

  const handleLayout = useCallback(e => {
    setScrollViewWidth(e.nativeEvent.layout.width);
  }, []);

  const renderItem = useCallback(
    ({item}) => <VerseComponent key={item.id} item={item} />,
    [],
  );

  const listEmptyComponent = useMemo(
    () => (
      <EmptyComponent text={t(34)} onPressRefresh={() => getVerses(page)} />
    ),
    [t, getVerses, page],
  );

  const boxWidth = scrollViewWidth;

  return (
    <>
      <Spinner visible={loading} />
      <View style={styles.container}>
        <FlashList
          disableAutoLayout
          removeClippedSubviews
          data={verses}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          renderItem={renderItem}
          estimatedItemSize={width}
          disableVirtualization={true}
          legacyImplementation={true}
          onEndReached={getNextPage}
          onEndReachedThreshold={0.5}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={boxWidth}
          disableIntervalMomentum
          contentInset={{
            left: 0,
            right: 0,
          }}
          contentOffset={{
            x: I18nManager.isRTL ? (verses.length - 1) * width : 0,
          }}
          onLayout={handleLayout}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: pan.x}}}],
            {useNativeDriver: false},
          )}
          ListEmptyComponent={listEmptyComponent}
          initialNumToRender={10}
        />
      </View>
    </>
  );
};

const styles = {
  container: {
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

const mapStateToProps = ({verses, app}) => ({
  verses: verses.verses,
  next: verses.next,
  page: verses.page,
  loading: verses.loading,
  backgroundImage: app.backgroundImage,
});

const mapDispatchToProps = {
  getVerses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
