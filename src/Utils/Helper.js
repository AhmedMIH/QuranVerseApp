import {Dimensions, PixelRatio} from 'react-native';
import Colors from './Colors';
import {store} from '../Redux/Store';
import themes from './Colors';

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

export const getThemeColor = darkMode => {
  const theme = darkMode ? 'dark' : 'light';
  const themeColor = themes[theme];
  const fallbackColor = themes.light;
  return themeColor || fallbackColor;
};
const getRandomColor = (darkMode = false) => {
  const lightColors = ['#CFDBC6', '#FCEAE4', '#F5EDC0', '#FFDADA'];
  const darkColors = ['#7E6359', '#816C00', '#6B805C', '#8F4C36'];
  const colors = darkMode ? darkColors : lightColors;
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

function localToUTC(hours, minutes) {
  // Convert hours and minutes to milliseconds
  const localTime = hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  // Calculate UTC time by subtracting the offset
  const utcTime = localTime - getTimezoneOffset() * 60 * 60 * 1000;
  return {
    hours: Math.floor(utcTime / (60 * 60 * 1000)),
    minutes: Math.floor((utcTime % (60 * 60 * 1000)) / (60 * 1000)),
  };
}

// Convert UTC time to local time
function utcToLocal(hours, minutes) {
  // Convert hours and minutes to milliseconds
  const utcTime = hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  // Calculate local time by adding the offset
  const localTime = utcTime + getTimezoneOffset() * 60 * 60 * 1000;
  return {
    hours: Math.floor(localTime / (60 * 60 * 1000)),
    minutes: Math.floor((localTime % (60 * 60 * 1000)) / (60 * 1000)),
  };
}

function getTimezoneOffset() {
  const currentDate = new Date();
  // Get the timezone offset in minutes
  const offsetInMinutes = currentDate.getTimezoneOffset();
  // Convert the offset to hours
  const offsetInHours = offsetInMinutes / 60;
  return offsetInHours;
}

function getAppUrl() {
  return 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en';
}

function getRateAppLink() {
  return 'https://play.google.com/store/apps/details?id=com.YoStarEN.Arknights';
}

function safeJsonParse(data) {
  // Replace NaN with null or any other valid JSON value
  const sanitizedData = data.replace(/NaN/g, 'null');

  // Parse the sanitized data
  return JSON.parse(sanitizedData);
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
  utcToLocal,
  localToUTC,
  safeJsonParse,
};
