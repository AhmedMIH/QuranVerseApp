import {StyleSheet} from 'react-native';
import {getColorTheme, getFontSize} from '../../../../Utils/Helper';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalItemTitle: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    lineHeight: 24,
    color: getColorTheme().darkPrimary,
  },
});
