import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../Utils/Helper';

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
  item: {
    height: responsiveHeight(150),
    width: responsiveWidth(95),
    marginRight: responsiveWidth(12),
    borderRadius: 8,
  },
  image: {
    height: responsiveHeight(150),
    width: responsiveWidth(95),
    borderRadius: 8,
  },
});
