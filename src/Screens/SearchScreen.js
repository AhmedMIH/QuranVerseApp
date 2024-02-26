import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchBar from '../Components/Search/SearchBar';
import TypesList from '../Components/Search/TypesList';
import { responsiveWidth } from '../Utils/Helper';
import Container from '../Components/Container';
import { getTags } from '../Redux/Actions';


const SearchScreen = ( { loading, tags, getTags } ) => {
  const [ searchQuery, setSearchQuery ] = useState( '' );

  useEffect( () => {
    getTags( 1 )
  }, [] )

  return (
    <Container style={{ marginHorizontal: responsiveWidth( 30 ) }}>
      <Spinner visible={loading} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TypesList tags={tags} />
    </Container>
  );
};

const mapStateToProps = ( { tags } ) => {
  return {
    tags: tags.tags,
    next: tags.next,
    page: tags.page,
    loading: tags.loading,
  };
};
const mapDispatchToProps = {
  getTags,
};


export default connect( mapStateToProps, mapDispatchToProps )( SearchScreen );
