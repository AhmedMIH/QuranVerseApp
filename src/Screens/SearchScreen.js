import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import SearchBar from '../Components/Search/SearchBar';
import TypesList from '../Components/Search/TypesList';
import { responsiveHeight, responsiveWidth } from '../Utils/Helper';
import Container from '../Components/Container';
import { getTags } from '../Redux/Actions';


const SearchScreen = ( { loading, tags, getTags, page } ) => {
  const [ searchQuery, setSearchQuery ] = useState( '' );
  const filteredTags = tags.filter( tag =>
    tag.name.toLowerCase().includes( searchQuery.toLowerCase() )
  );

  useEffect( () => {
    getTags( page )
  }, [] )

  return (
    <Container style={{ paddingHorizontal: responsiveWidth( 30 ), paddingVertical: responsiveHeight( 16 ) }}>
      <Spinner visible={loading} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TypesList tags={filteredTags} onRefresh={() => getTags( page )} />
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
