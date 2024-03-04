import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(16),
    backgroundColor: getColorTheme( darkMode ).moreLight,
    borderRadius: 16,
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginHorizontal: responsiveWidth(16),
  },
  optionText: {
    fontWeight: '500',
    fontSize: getFontSize(14),
    color: getColorTheme( darkMode ).fillProgressBar,
  },
});
