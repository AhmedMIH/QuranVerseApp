import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../Utils/Helper';

export default style = (bg, darkMode) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: responsiveHeight(24),
      backgroundColor: bg,
      height: responsiveHeight(88),
      width: responsiveWidth(154),
      borderRadius: 8,
    },
    title: {
      fontWeight: '500',
      fontSize: getFontSize(14),
      lineHeight: 20,
      letterSpacing: 0.1,
      color: darkMode ? 'white' : getThemeColor(darkMode).darkPrimary,
    },
  });
