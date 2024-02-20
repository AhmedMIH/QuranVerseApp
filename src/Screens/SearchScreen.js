import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../Components/Search/SearchBar';
import {responsiveWidth} from '../Utils/Helper';
import TypesList from '../Components/Search/TypesList';
import Container from '../Components/Container';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container style={{marginHorizontal: responsiveWidth(30)}}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TypesList />
    </Container>
  );
};

export default SearchScreen;
