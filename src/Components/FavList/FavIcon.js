import { TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { addVerseToFav, removeVerseFromFav } from '../../Redux/Actions';
import styles from './styles';

function FavIcon ( { item, addVerseToFav, removeVerseFromFav, style, loading } ) {
  const { favs } = useSelector( state => state.fav );
  const { darkMode } = useSelector( state => state.app )
  const checkIfFav = () => {
    for ( let i = 0;i < favs.length;i++ ) {
      if ( favs[ i ].id === item.id ) {
        return true;
      }
    }
    return false;
  };

  useEffect( () => {
    checkIfFav();

  }, [ favs, ] );


  const handleOnPressFav = () => {
    if ( checkIfFav() ) {
      removeVerseFromFav( item );
    } else {
      addVerseToFav( item );
    }
  };
  return (
    <TouchableOpacity style={styles( darkMode ).icon} onPress={handleOnPressFav}>
      <Spinner visible={loading} />

      <LottieView
        source={require( '../../animation/addToFav.json' )}
        style={[ styles( darkMode ).animation, style ]}
        loop={false}
        progress={checkIfFav() ? 1 : 0}
      />
    </TouchableOpacity>
  );
}

const mapStateToProps = ( { fav } ) => ( {
  loading: fav.loading
} );
const mapDispatchToProps = {
  addVerseToFav,
  removeVerseFromFav,
};

export default connect( mapStateToProps, mapDispatchToProps )( FavIcon );
