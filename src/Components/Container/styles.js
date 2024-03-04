import {StatusBar, StyleSheet} from 'react-native';
import {getColorTheme} from '../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: getColorTheme( darkMode ).white,
  },
});
