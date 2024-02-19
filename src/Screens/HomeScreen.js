import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {getVerses} from '../Redux/Actions';
import VerseComponent from '../Components/VerseComponent';

const HomeScreen = ({navigation, getVerses, verses, notificationState}) => {
  const [prevIndex, setPrevIndex] = useState(0);
  const [page, setPage] = useState(1);
  const ii = {
    id: 1,
    verse: 'Verily in the remembrance of Allah do hearts find rest.',
    verseAr: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    date: 'December 4 2023',
    surah: 'Surah Ar-R’ad | 28',
  };

  // useEffect(() => {
  //   getVerses(page);
  // }, []);

  // const getNextPage = index => {
  //   if (index < verses.length - 1) {
  //     getVerses(page + 1);
  //     setPage(page + 1);
  //   }
  // };

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: {display: 'none'},
    });
  };
  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: {display: 'flex'},
    });
  };
  return (
    // <FlatList
    //   onScroll={e => {
    //   }}
    //   data={verses}
    //   keyExtractor={item => item.id}
    //   horizontal
    //   renderItem={({item}) => (
    //     <VerseComponent
    //       item={ii}
    //       keyExtractor={item => item.id}
    //       onEndReached={() => {
    //         getVerses(page + 1);
    //         setPage(page + 1);
    //       }}
    //       onEndReachedThreshold={9 * page}
    //     />
    //   )}
    // />
    <VerseComponent item={ii} key={ii.id} />
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({verses, app}) => {
  return {
    verses: verses.verses,
    notificationState: app.notificationState,
  };
};
const mapDispatchToProps = {
  getVerses,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
