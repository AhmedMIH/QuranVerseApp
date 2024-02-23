import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(16),
    backgroundColor: getColorTheme().white,
  },
  outerContainer: {
    borderBottomWidth: 0.75,
    borderBottomColor: getColorTheme().borderColor,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(57),
    justifyContent: 'center',
    borderBottomWidth: 0.75,
    paddingHorizontal: responsiveWidth(16),
    borderBottomColor: getColorTheme().borderColor,
  },
  mainText: {
    flex: 1,
    fontWeight: '400',
    fontSize: getFontSize(16),
    lineHeight: 24,
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    color: getColorTheme().text,
  },
  expandItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(16),
    marginBottom: responsiveHeight(8),
  },
  reminderTime: {
    fontWeight: '400',
    fontSize: getFontSize(16),
    lineHeight: 24,
    letterSpacing: 0.5,
    color: getColorTheme().text,
  },
});
