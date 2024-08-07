import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = darkMode =>
  StyleSheet.create({
    modal: {
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 0,
    },
    outerContainer: {
      flex: 1,
      backgroundColor: getThemeColor(darkMode).modalBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      borderTopEndRadius: 8,
      borderTopStartRadius: 8,
      backgroundColor: getThemeColor(darkMode).bottomSheetColor,
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: responsiveWidth(16),
      paddingBottom: responsiveHeight(32),
      width: '100%',
    },
  });
