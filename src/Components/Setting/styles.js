import {Platform, StyleSheet} from 'react-native';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';

export default styles = ( darkMode ) => StyleSheet.create( {
  container: {
    marginHorizontal: responsiveWidth(16),
    backgroundColor: getThemeColor( darkMode ).white,
  },
  outerContainer: {
    borderBottomWidth: 0.75,
    borderBottomColor: getThemeColor( darkMode ).borderColor,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(57),
    borderBottomWidth: 0.75,
    paddingHorizontal: responsiveWidth(16),
    borderBottomColor: getThemeColor( darkMode ).borderColor,
  },
  mainText: {
    flex: 1,
    fontWeight: '400',
    fontSize: getFontSize(16),
    lineHeight: 24,
    textAlignVertical: 'center',
    textAlign:Platform.OS =='ios' ? 'left':null,
    letterSpacing: 0.5,
    color: getThemeColor( darkMode ).text,
  },
  expandItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(16),
    marginBottom: responsiveHeight(8),
  },
  reminderTime: {
    fontWeight: '400',
    fontSize: getFontSize(16),
    lineHeight: 24,
    letterSpacing: 0.5,
    color: getThemeColor( darkMode ).text,
  },
});
