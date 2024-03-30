import { Animated, Dimensions, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { FlashList } from '@shopify/flash-list';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { getVerses } from '../../Redux/Actions';
import VerseComponent from '../VerseComponent';
import EmptyComponent from '../EmptyComponent';

const index = ( { verses, getVerses, next, page, loading } ) => {
  const width = Dimensions.get( 'window' ).width
  const [ scrollViewWidth, setScrollViewWidth ] = useState( 0 );
  const { t } = useTranslation()
  const boxWidth = scrollViewWidth * 1;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = useRef( new Animated.ValueXY() ).current;
  useEffect( () => {
    getVerses( page )
  }, [] )

  const getNextPage = () => {
    if ( next && !loading ) {
      getVerses( page + 1 );
    }
  }

  return (
    <>
      <Spinner visible={loading} />
      <View style={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <FlashList
          removeClippedSubviews
          data={verses}
          keyExtractor={item => item.id}
          horizontal
          renderItem={( { item, index } ) => <VerseComponent key={item.id} item={item} />}
          estimatedItemSize={width}
          onEndReached={() => {
            getNextPage()
          }}
          onEndReachedThreshold={verses?.length - 5}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={boxWidth}
          contentInset={{
            left: halfBoxDistance,
            right: halfBoxDistance,
          }}
          contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
          onLayout={e => {
            setScrollViewWidth( e.nativeEvent.layout.width );
          }}
          onScroll={Animated.event( [ { nativeEvent: { contentOffset: { x: pan.x } } } ], {
            useNativeDriver: false,
          } )}
          ListEmptyComponent={<EmptyComponent text={t( 34 )} onPressRefresh={() => getVerses( page )} />}
          initialNumToRender={10}
        />
      </View>
    </>
  );
};

const mapStateToProps = ( { verses, app } ) => {
  return {
    verses: verses.verses,
    next: verses.next,
    page: verses.page,
    loading: verses.loading,
    backgroundImage: app.backgroundImage,
  };
};
const mapDispatchToProps = {
  getVerses,
};

export default connect( mapStateToProps, mapDispatchToProps )( index );
