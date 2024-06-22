import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = darkMode =>
  StyleSheet.create({
    icon: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'flex-start',
      width: responsiveWidth(47),
    },
    animation: {
      width: responsiveWidth(40),
      height: responsiveHeight(40),
    },
    container: {
      marginHorizontal: responsiveWidth(16),
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: responsiveWidth(24),
      paddingVertical: responsiveHeight(16),
      borderBottomWidth: 0.75,
      borderBottomColor: getThemeColor(darkMode).borderColor,
    },
    verseText: {
      fontSize: getFontSize(14),
      lineHeight: 20,
      letterSpacing: 0.25,
      color: getThemeColor(darkMode).text,
      fontWeight: '400',
    },
    surahText: {
      fontSize: getFontSize(12),
      lineHeight: 16,
      fontWeight: '500',
      color: getThemeColor(darkMode).text,
      marginTop: responsiveHeight(8),
      alignSelf: 'flex-start',
    },
    optionContainer: {
      flexDirection: 'row',
      paddingHorizontal: 12,
      paddingVertical: 16,
      justifyContent: 'space-between',
      backgroundColor: darkMode
        ? '#372D29'
        : getThemeColor(darkMode).lightPrimary,
    },
    optionText: {
      fontSize: getFontSize(16),
      lineHeight: 24,
      fontWeight: '400',
      color: darkMode ? '#FFF8F6' : getThemeColor(darkMode).text,
    },
  });
