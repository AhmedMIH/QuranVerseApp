import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {addVerseToFav, removeVerseFromFav} from '../../Redux/Actions';
import Spinner from 'react-native-loading-spinner-overlay';

function FavIcon({item, addVerseToFav, removeVerseFromFav, style}) {
  const {favs, loading} = useSelector(state => state.fav);

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
    <TouchableOpacity
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: 47,
      }}
      onPress={handleOnPressFav}>
      <Spinner visible={loading} />
      <LottieView
        source={require('../../animation/addToFav.json')}
        style={[
          {
            width: 40,
            height: 40,
          },
          style,
        ]}
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
