import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Container from '../Components/Container';
import SearchBar from '../Components/Search/SearchBar';
import Header from '../Components/Header';
import VersesAboutListPresentational from '../Components/VersesAboutListPresentational';

const VerseTypeScreen = ({navigation, route}) => {
  const [searchQuery, setSearchQuery] = useState('');
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

  return (
    <Container>
      <SearchBar
        style={{marginHorizontal: 30}}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Header title={route.params.type} haveBack={true} />
      <VersesAboutListPresentational verses={verses} type={2} />
    </Container>
  );
};

export default VerseTypeScreen;
