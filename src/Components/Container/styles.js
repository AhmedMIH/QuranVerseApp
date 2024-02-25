import {StatusBar, StyleSheet} from 'react-native';
import {getColorTheme} from '../../Utils/Helper';

export default StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: getColorTheme().white,
  },
});
