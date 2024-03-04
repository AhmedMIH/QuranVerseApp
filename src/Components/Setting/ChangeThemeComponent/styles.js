import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  modalContainer: {
    flex: 1,
    backgroundColor: getThemeColor( darkMode ).white,
  },
  modalItemTitle: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    lineHeight: 24,
    color: getThemeColor( darkMode ).darkPrimary,
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
