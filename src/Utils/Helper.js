import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
import {useSelector} from 'react-redux';
import {store} from '../Redux/Store';

const isTesting = true;
const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / 390;
};

const responsiveHeight = height => {
  return (Dimensions.get('window').height * height) / 844;
};

const getFontSize = size => size / PixelRatio.getFontScale();

const getFontFamily = weight => {
  const baseName = 'Montserrat-';
  switch (weight) {
    case '100':
      return baseName + 'Thin';
    case '200':
      return baseName + 'ExtraLight';
    case '300':
      return baseName + 'Light';
    case '400':
      return baseName + 'Regular';
    case '500':
      return baseName + 'Medium';
    case '600':
      return baseName + 'SemiBold';
    case '700':
      return baseName + 'Bold';
    case '800':
      return baseName + 'ExtraBold';
    case '900':
      return baseName + 'Black';
  }
};

const debugLog = (tag, message) => {
  if (isTesting) {
    if (message === undefined) {
      console.log(tag);
    } else {
      console.log(tag, message);
    }
  }
};

const getColorTheme = () => {
  const {darkMode} = store.getState().app;
  return darkMode ? Colors.dark : Colors.light;
};

export {
  responsiveWidth,
  responsiveHeight,
  getFontSize,
  getFontFamily,
  debugLog,
  getColorTheme,
};
