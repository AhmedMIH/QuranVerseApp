import {StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(54),
    paddingHorizontal: responsiveWidth(16),
  },
  title: {
    flex: 1,
    fontWeight: '700',
    fontSize: getFontSize(17),
    lineHeight: 22,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: getThemeColor( darkMode ).text,
  },
});
