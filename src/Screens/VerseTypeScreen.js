import Spinner from 'react-native-loading-spinner-overlay';
import React, { useEffect, useState } from 'react';
import VersesAboutListPresentational from '../Components/VersesAboutListPresentational';
import Container from '../Components/Container';
import SearchBar from '../Components/Search/SearchBar';
import Header from '../Components/Header';
import { getTagVerses } from '../Redux/Actions';
import { connect } from 'react-redux';
const VerseTypeScreen = ( { route, loading, getTagVerses, verses } ) => {
  const [ searchQuery, setSearchQuery ] = useState( '' );
  const item = route.params.type;
  console.log( 'item', item )

  useEffect( () => {
    getTagVerses( item.id )
  }, [] )

  return (
    <Container>
      <Spinner visible={loading} />
      <SearchBar
        style={{ marginHorizontal: 30 }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Header title={item.name} haveBack={true} />
      <VersesAboutListPresentational verses={verses} type={2} />
    </Container>
  );
};
const mapStateToProps = ( { tags } ) => {
  return {
    verses: tags.verses,
    loading: tags.loading,
  };
};
const mapDispatchToProps = {
  getTagVerses,
};


export default connect( mapStateToProps, mapDispatchToProps )( VerseTypeScreen )
