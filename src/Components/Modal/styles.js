import {StyleSheet} from 'react-native';
import {
  getColorTheme,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default StyleSheet.create({
  modal: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderRadius: 16,
    backgroundColor: getColorTheme().moreLight,
    marginBottom: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(20),
    width: responsiveWidth(330),
  },
});
