import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../Utils/Helper';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalItemTitle: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    lineHeight: 24,
    color: getColorTheme().darkPrimary,
  },
  itemContainer: {
    height: responsiveHeight(150),
    width: responsiveWidth(95),
    backgroundColor: getColorTheme().seashell,
    marginRight: 12,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  itemText: {
    fontSize: getFontSize(14),
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: getColorTheme().darkPrimary,
  },
  overflowContainer: {
    height: responsiveHeight(65),
    width: responsiveWidth(45),
    borderRadius: 8,
  },
});
