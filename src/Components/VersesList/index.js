import { Animated, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import VerseComponent from '../VerseComponent';
import { getVerses } from '../../Redux/Actions';
import { connect } from 'react-redux';
import EmptyComponent from '../EmptyComponent';

const index = ( { verses, getVerses, next, page, loading } ) => {
  const [ scrollViewWidth, setScrollViewWidth ] = useState( 0 );

  const boxWidth = scrollViewWidth * 1;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = useRef( new Animated.ValueXY() ).current;
  useEffect( () => {
    getVerses( page )
  }, [] )

  const getNextPage = () => {
    if ( next ) {
      getVerses( page + 1 );
    }
  }


  return (
    <>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={verses}
        keyExtractor={item => item.id}
        horizontal
        renderItem={( { item, index } ) => <VerseComponent item={item} />}
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
        ListEmptyComponent={<EmptyComponent text={'No Verses Available'} />}

      />
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
