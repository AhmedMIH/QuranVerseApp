import {StyleSheet} from 'react-native';
import {getColorTheme, responsiveHeight} from '../../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    marginTop: responsiveHeight(16),
    backgroundColor: getColorTheme( darkMode ).moreLight,
  },
});
