import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getVerses} from '../Redux/Actions';
import VersesList from '../Components/VersesList';
const HomeScreen = ({navigation, getVerses}) => {
  const [prevIndex, setPrevIndex] = useState(0);
  const [page, setPage] = useState(1);
  const verses = [
    {
      id: 1,
      verse: 'Verily in the remembrance of Allah do hearts find rest.',
      verseAr: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      date: 'December 4 2023',
      surah: 'Surah Ar-R’ad | 28',
    },
    {
      id: 2,
      verse: 'Verily in the remembrance of Allah do hearts find rest.',
      verseAr: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      date: 'December 4 2023',
      surah: 'Surah Ar-R’ad | 28',
    },
    {
      id: 3,
      verse: 'Verily in the remembrance of Allah do hearts find rest.',
      verseAr: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      date: 'December 4 2023',
      surah: 'Surah Ar-R’ad | 28',
    },
    {
      id: 4,
      verse: 'Verily in the remembrance of Allah do hearts find rest.',
      verseAr: 'أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      date: 'December 4 2023',
      surah: 'Surah Ar-R’ad | 28',
    },
  ];

  useEffect(() => {
    // getVerses(page);
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});

    // Shows the bar when getting to another screen
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: '#6458D7',
          borderTopEndRadius: 18,
          borderTopLeftRadius: 18,
        },
      });
  }, [navigation]);

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
  return <VersesList verses={verses} />;
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

const mapStateToProps = ({verses}) => {
  return {
    verses: verses.verses,
  };
};
const mapDispatchToProps = {
  getVerses,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
