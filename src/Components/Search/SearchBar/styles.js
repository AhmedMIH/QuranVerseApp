import {StyleSheet} from 'react-native';
import { getThemeColor, responsiveHeight } from '../../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    marginTop: responsiveHeight(16),
    backgroundColor: getThemeColor( darkMode ).moreLight,
  },
});
