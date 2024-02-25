import {StyleSheet} from 'react-native';
import {getColorTheme, responsiveHeight} from '../../../Utils/Helper';

export default StyleSheet.create({
  container: {
    marginTop: responsiveHeight(16),
    backgroundColor: getColorTheme().moreLight,
  },
});
