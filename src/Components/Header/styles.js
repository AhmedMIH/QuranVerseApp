import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveHeight(54),
    marginHorizontal: responsiveWidth(16),
    marginVertical: responsiveHeight(16),
  },
  title: {
    flex: 1,
    fontWeight: '700',
    fontSize: getFontSize(17),
    lineHeight: 22,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: getColorTheme().text,
  },
});
