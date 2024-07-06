import {Dimensions, StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveWidth,
  responsiveHeight,
} from '../../Utils/Helper';

const textStyle = darkMode => ( {
  textAlign: 'center',
  textAlignVertical: 'center',
  color: getThemeColor( darkMode ).text,
} );

const {width} = Dimensions.get('window');

export default styles = darkMode =>
  StyleSheet.create({
    imageContainer: {
      width: width,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    verseText: {
      ...textStyle(darkMode),
      fontWeight: '400',
      fontSize: getFontSize(22),
      lineHeight: 28,
    },
    verseArText: {
      fontWeight: '500',
      fontSize: getFontSize(16),
      lineHeight: 24,
      letterSpacing: 0.15,
      ...textStyle(darkMode),
    },
    surahText: {
      fontWeight: '500',
      fontSize: getFontSize(14),
      lineHeight: 20,
      letterSpacing: 0.1,
      ...textStyle(darkMode),
    },
    dateText: {
      fontWeight: '400',
      fontSize: getFontSize(14),
      lineHeight: 20,
      letterSpacing: 0.25,
      ...textStyle(darkMode),
    },
    bottomSheetLine: {
      alignSelf: 'center',
      width: responsiveWidth(32),
      height: responsiveHeight(4),
      borderRadius: 50,
      backgroundColor: '#978F8D',
    },
    bottomSheetText: {
      marginTop: responsiveHeight(32),
      fontWeight: '400',
      fontSize: getFontSize(16),
      lineHeight: 22,
      letterSpacing: 0.5,
      ...textStyle(darkMode),
    },
  });
