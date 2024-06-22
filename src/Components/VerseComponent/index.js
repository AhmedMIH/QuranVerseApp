import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ViewShot, {captureRef} from 'react-native-view-shot';
import {useDispatch, useSelector} from 'react-redux';
import Share from 'react-native-share';
import {
  getThemeColor,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';
import styles from './styles';
import VerticalSpace from '../VerticalSpace';
import FavIcon from '../FavList/FavIcon';
import {errorHandling} from '../../Redux/Actions';
import BottomSheet from '../BottomSheet';
import {useNavigation} from '@react-navigation/native';

const index = ({item, topHeight = 0, haveExit = false}) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const navigation = useNavigation();
  const {loading} = useSelector(state => state.fav);
  const {darkMode, backgroundType, backgroundImage} = useSelector(
    state => state.app,
  );
  const [isAr, setIsAr] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleOnPressShare = async () => {
    try {
      const uri = await captureRef(ref, {
        format: 'png',
        quality: 0.7,
      });
      await Share.open({url: uri});
    } catch (e) {
      dispatch(errorHandling(35));
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Animated.View style={{flex: 1, top: topHeight}}>
      <Spinner visible={loading} />
      <BottomSheet isVisible={showInfo} onToggle={() => toggleInfo()}>
        <View style={styles(darkMode).bottomSheetLine} />
        <Text style={styles(darkMode).bottomSheetText}>
          {isAr ? item.explanationAr : item.explanation}
        </Text>
      </BottomSheet>
      <ViewShot style={{flex: 1}} ref={ref}>
        <ImageBackground
          imageStyle={{backgroundColor: backgroundImage}}
          style={styles(darkMode).imageContainer}
          source={backgroundType === 1 ? null : backgroundImage}
          resizeMode="cover">
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              flex: 1,
              right: 0,
              left: 0,
              top: responsiveHeight(54),
              paddingHorizontal: responsiveWidth(16),
              justifyContent: 'space-between ',
              alignItems: 'center',
            }}>
            {haveExit && (
              <TouchableOpacity
                style={{flex: 1, alignItems: 'flex-start'}}
                onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name={'close'}
                  size={24}
                  color={getThemeColor(darkMode).iconsColors}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{flex: 1, alignItems: 'flex-end'}}
              onPress={() => setIsAr(!isAr)}>
              <MaterialIcons
                name={'language'}
                size={24}
                color={getThemeColor(darkMode).langIconColor}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles(darkMode).verseArText}>
            {isAr ? item.verseAr : item.verse}
          </Text>
          <VerticalSpace height={32} />
          <Text style={styles(darkMode).surahText}>{item.surah}</Text>
          <VerticalSpace height={32} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(16),
            }}>
            <TouchableOpacity
              onPress={() => {
                toggleInfo();
              }}
              style={{justifyContent: 'center'}}>
              <MaterialIcons
                name={'info-outline'}
                color={getThemeColor(darkMode).iconsColors}
                size={24}
              />
            </TouchableOpacity>
            <FavIcon item={item} />
            <TouchableOpacity
              onPress={() => {
                handleOnPressShare();
              }}
              style={{justifyContent: 'center'}}>
              <MaterialIcons
                name={'ios-share'}
                color={getThemeColor(darkMode).iconsColors}
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
