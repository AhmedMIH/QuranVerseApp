import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  modal: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: getColorTheme( darkMode ).modalBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderRadius: 16,
    backgroundColor: getColorTheme( darkMode ).moreLight,
    marginBottom: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(20),
    width: responsiveWidth(330),
  },
});
