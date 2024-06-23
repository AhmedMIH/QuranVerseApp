import Spinner from 'react-native-loading-spinner-overlay';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import VersesAboutListPresentational from '../Components/VersesAboutListPresentational';
import { getTagVerses } from '../Redux/Actions';
import Container from '../Components/Container';
const VerseTypeScreen = ( { route, loading, getTagVerses, verses } ) => {
  const item = route.params.type;

  useEffect( () => {
    getTagVerses( item.id )
  }, [] )

  return (
    <>
      <Spinner visible={loading} />
      <VersesAboutListPresentational
        verses={verses}
        type={2}
        onRefresh={() => getTagVerses(item.id)}
      />
    </>
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
