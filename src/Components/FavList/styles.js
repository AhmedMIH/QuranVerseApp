import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default StyleSheet.create({
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
    borderBottomColor: getColorTheme().borderColor,
  },
  verseText: {
    fontSize: getFontSize(14),
    lineHeight: 20,
    letterSpacing: 0.25,
    color: getColorTheme().text,
    fontWeight: '400',
  },
  surahText: {
    fontSize: getFontSize(12),
    lineHeight: 16,
    fontWeight: '500',
    color: getColorTheme().text,
    marginTop: responsiveHeight(8),
  },
  optionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    backgroundColor: getColorTheme().lightPrimary,
  },
  optionText: {
    fontSize: getFontSize(16),
    lineHeight: 24,
    fontWeight: '400',
    color: getColorTheme().text,
  },
});
