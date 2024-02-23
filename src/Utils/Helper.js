import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
import {useSelector} from 'react-redux';
import {store} from '../Redux/Store';
import images from '../Images';

const isTesting = true;
let prevColor = null;

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

const getRandomColor = () => {
  const colors = [
    getColorTheme().seashell,
    getColorTheme().pink,
    getColorTheme().pastel,
    getColorTheme().lemon,
  ];
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colors.length);
  } while (colors[randomIndex] === prevColor);
  prevColor = colors[randomIndex];

  return prevColor;
};

const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

function formatTime(hours, minutes) {
  // Determine AM or PM
  const meridiem = hours >= 12 ? '24' : '23';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zero to minutes if necessary
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Concatenate the formatted time components
  return {time: `${formattedHours}:${formattedMinutes} `, meridiem: meridiem};
}

function getAppUrl() {
  return 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en';
}

function getRateAppLink() {
  return 'https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights';
}

export {
  responsiveWidth,
  responsiveHeight,
  getFontSize,
  getFontFamily,
  debugLog,
  getColorTheme,
  getRandomColor,
  formatTime,
  getAppUrl,
  getRateAppLink,
  getRandomNumber,
};
