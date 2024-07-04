import {Platform, StyleSheet} from 'react-native';
import { getThemeColor, responsiveHeight } from '../../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    marginTop: responsiveHeight(16),
    backgroundColor: getThemeColor( darkMode ).moreLight,
    marginHorizontal:Platform.OS === 'ios' ? 16:0
  },
});
