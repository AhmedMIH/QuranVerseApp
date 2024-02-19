import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import {getColorTheme, responsiveWidth} from '../../Utils/Helper';
import images from '../../Images';
import styles from './styles';
import VerticalSpace from '../VerticalSpace';
import {addVerseToFav, removeVerseFromFav} from '../../Redux/Actions';
import {connect, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import ViewShot, {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';

const index = ({item, addVerseToFav, removeVerseFromFav}) => {
  const {loading} = useSelector(state => state.fav);
  const {favs} = useSelector(state => state.fav);
  const ref = useRef();

  const [play, setPlay] = useState(false);
  const checkIfFav = () => {
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].verse === item.verse) {
        return true;
      }
    }
    return false;
  };

  const [progress, setProgress] = useState(checkIfFav() ? 1 : 0);

  const handleOnPressFav = () => {
    setPlay(!play);
    if (checkIfFav()) {
      setProgress(0);
      removeVerseFromFav(item);
    } else {
      setProgress(1);
      addVerseToFav(item);
    }
  };

  const handleOnPressShare = async () => {
    try {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 0.7,
      });
      console.log('uri', uri);
      await Share.open({url: uri});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Spinner visible={loading} />
      <ViewShot style={{flex: 1}} ref={ref}>
        <ImageBackground
          style={styles.imageContainer}
          source={images.backgroundImage}
          resizeMode="cover">
          <Text style={styles.verseArText}>{item.verse}</Text>
          <VerticalSpace height={32} />
          <Text style={styles.verseArText}>{item.verseAr}</Text>
          <VerticalSpace height={32} />
          <Text style={styles.surahText}>{item.surah}</Text>
          <VerticalSpace height={32} />
          <Text style={styles.dateText}>{item.date}</Text>
          <VerticalSpace height={32} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(16),
            }}>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              onPress={() => handleOnPressFav()}>
              <LottieView
                source={require('../../animation/addToFav.json')}
                style={{width: 40, height: 40, borderColor: 'black'}}
                autoPlay={play}
                loop={false}
                progress={progress}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleOnPressShare();
              }}
              style={{justifyContent: 'center'}}>
              <MaterialIcons
                name={'ios-share'}
                color={getColorTheme().darkPrimary}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ViewShot>
    </>
  );
};

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = {
  addVerseToFav,
  removeVerseFromFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
