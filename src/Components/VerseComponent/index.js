import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ViewShot, {captureRef} from 'react-native-view-shot';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';
import {getColorTheme, responsiveWidth} from '../../Utils/Helper';
import styles from './styles';
import VerticalSpace from '../VerticalSpace';
import FavIcon from '../FavList/FavIcon';

const index = ({item}) => {
  const {loading} = useSelector(state => state.fav);
  const {backgroundType, backgroundImage} = useSelector(state => state.app);
  const ref = useRef();

  const handleOnPressShare = async () => {
    try {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 0.7,
      });
      await Share.open({url: uri});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Animated.View style={{flex: 1}}>
      <Spinner visible={loading} />
      <ViewShot style={{flex: 1}} ref={ref}>
        <ImageBackground
          imageStyle={{backgroundColor: backgroundImage}}
          style={styles.imageContainer}
          source={backgroundType === 1 ? null : backgroundImage}
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
            <FavIcon item={item} />
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
    </Animated.View>
  );
};

export default index;
