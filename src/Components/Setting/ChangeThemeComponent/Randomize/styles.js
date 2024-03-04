import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  modalContainer: {
    flex: 1,
  },
  modalItemTitle: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    lineHeight: 24,
    color: getThemeColor( darkMode ).darkPrimary,
  },
  itemContainer: {
    height: responsiveHeight(150),
    width: responsiveWidth(95),
    backgroundColor: getThemeColor( darkMode ).seashell,
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
    color: getThemeColor( darkMode ).darkPrimary,
  },
  overflowContainer: {
    height: responsiveHeight(65),
    width: responsiveWidth(45),
    borderRadius: 8,
  },
});
