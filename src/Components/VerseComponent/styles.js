import {Dimensions, StyleSheet} from 'react-native';
import {getColorTheme, getFontSize, responsiveWidth} from '../../Utils/Helper';

const textStyle = {
  textAlign: 'center',
  textAlignVertical: 'center',
  color: getColorTheme().text,
};

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  imageContainer: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(75),
  },
  verseText: {
    ...textStyle,
    fontWeight: '400',
    fontSize: getFontSize(22),
    lineHeight: 28,
  },
  verseArText: {
    fontWeight: '500',
    fontSize: getFontSize(16),
    lineHeight: 24,
    letterSpacing: 0.15,
    ...textStyle,
  },
  surahText: {
    fontWeight: '500',
    fontSize: getFontSize(14),
    lineHeight: 20,
    letterSpacing: 0.1,
    ...textStyle,
  },
  dateText: {
    fontWeight: '400',
    fontSize: getFontSize(14),
    lineHeight: 20,
    letterSpacing: 0.25,
    ...textStyle,
  },
});
