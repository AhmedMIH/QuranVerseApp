import { getThemeColor } from './Helper';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
export default theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: getThemeColor().fillProgressBar,
    primaryContainer: '#F2E48A',
    secondaryContainer: '#FFDBCD',
    surfaceVariant: '#F1DFD8',
    onPrimary: '#FFF',
    onSurface: '#000',
    onSurfaceVariant: '#000',
    outline: '#85736C',
  },
};
