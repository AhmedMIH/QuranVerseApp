import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {addVerseToFav, removeVerseFromFav} from '../../Redux/Actions';
import styles from './styles';
import {getThemeColor} from '../../Utils/Helper';

function FavIcon({item, addVerseToFav, removeVerseFromFav, style, loading}) {
  const {favs} = useSelector(state => state.fav);
  const {darkMode} = useSelector(state => state.app);
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

  const handleOnPressFav = () => {
    if (checkIfFav()) {
      removeVerseFromFav(item);
    } else {
      addVerseToFav(item);
    }
  };
  return (
    <TouchableOpacity style={styles(darkMode).icon} onPress={handleOnPressFav}>
      <Spinner visible={loading} />
      <MaterialIcons
        name={checkIfFav() ? 'favorite' : 'favorite-border'}
        size={24}
        color={checkIfFav() ? 'red' : getThemeColor(darkMode).iconsColors}
      />
    </TouchableOpacity>
  );
}

const mapStateToProps = ({fav}) => ({
  loading: fav.loading,
});
const mapDispatchToProps = {
  addVerseToFav,
  removeVerseFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavIcon);
