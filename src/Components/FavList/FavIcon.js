import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {addVerseToFav, removeVerseFromFav} from '../../Redux/Actions';
import styles from './styles';

function FavIcon({item, addVerseToFav, removeVerseFromFav, style}) {
  const {favs, loading} = useSelector(state => state.fav);
  const { darkMode } = useSelector( state => state.app )


  const [play, setPlay] = useState(false);
  const checkIfFav = () => {
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].id === item.id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    checkIfFav();
  }, [favs]);

  const [progress, setProgress] = useState(checkIfFav() ? 1 : 0);

  const handleOnPressFav = () => {
    if (checkIfFav()) {
      setProgress(0);
      removeVerseFromFav(item);
      setPlay(false);
    } else {
      setPlay(true);
      setProgress(1);
      addVerseToFav(item);
    }
  };
  return (
    <TouchableOpacity style={styles( darkMode ).icon} onPress={handleOnPressFav}>
      <Spinner visible={loading} />
      <LottieView
        source={require('../../animation/addToFav.json')}
        style={[ styles( darkMode ).animation, style ]}
        autoPlay={play}
        loop={false}
        progress={progress}
      />
    </TouchableOpacity>
  );
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {
  addVerseToFav,
  removeVerseFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavIcon);
