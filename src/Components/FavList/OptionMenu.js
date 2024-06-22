import {Text, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Menu} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { getThemeColor, responsiveWidth } from '../../Utils/Helper';
import styles from './styles';
import { useSelector } from 'react-redux';
const OptionMenu = ({
  visible,
  closeMenu,
  openMenu,
  onPressFav,
  onPressShare,
} ) => {
  const {t} = useTranslation();
  const { darkMode } = useSelector( state => state.app )

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      contentStyle={{
        backgroundColor: darkMode
          ? '#372D29'
          : getThemeColor(darkMode).lightPrimary,
        width: 120,
      }}
      anchor={
        <TouchableOpacity
          style={{marginLeft: responsiveWidth(12)}}
          onPress={() => openMenu()}>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={darkMode ? '#FFF8F6' : getThemeColor(darkMode).darkPrimary}
          />
        </TouchableOpacity>
      }>
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          onPressFav();
          forceUpdate();
        }}
        style={styles(darkMode).optionContainer}>
        <Text style={styles(darkMode).optionText}>{t('25')}</Text>
        <FontAwesome
          name="trash-o"
          size={24}
          color={darkMode ? '#FFF8F6' : getThemeColor(darkMode).darkPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          onPressShare();
          forceUpdate();
        }}
        style={styles(darkMode).optionContainer}>
        <Text style={styles(darkMode).optionText}>{t('12')}</Text>
        <MaterialIcons
          name={'ios-share'}
          color={darkMode ? '#FFF8F6' : getThemeColor(darkMode).darkPrimary}
          size={24}
        />
      </TouchableOpacity>
    </Menu>
  );
};

export default OptionMenu;
