import {View, Text, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  getColorTheme,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/Helper';
import {removeVerseFromFav} from '../../Redux/Actions';

import FavIcon from './FavIcon';
import {useTranslation} from 'react-i18next';

export default function FavItem({item, type}) {
  const {t} = useTranslation();
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Verse', {item: item})}
      style={{
        marginHorizontal: responsiveWidth(16),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(24),
        paddingVertical: responsiveHeight(16),
        borderBottomWidth: 0.75,
        borderBottomColor: getColorTheme().borderColor,
      }}>
      <View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: getFontSize(14),
            lineHeight: 20,
            letterSpacing: 0.25,
            color: getColorTheme().text,
            fontWeight: '400',
          }}>
          {item.verse}
        </Text>
        <Text
          style={{
            fontSize: getFontSize(12),
            lineHeight: 16,
            fontWeight: '500',
            color: getColorTheme().text,
            marginTop: responsiveHeight(8),
          }}>
          {item.surah}
        </Text>
      </View>
      {type === 1 ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          contentStyle={{
            backgroundColor: getColorTheme().lightPrimary,
            width: 120,
          }}
          anchor={
            <TouchableOpacity
              style={{marginLeft: responsiveWidth(12)}}
              onPress={() => openMenu()}>
              <MaterialIcons
                name="more-vert"
                size={24}
                color={getColorTheme().darkPrimary}
              />
            </TouchableOpacity>
          }>
          <TouchableOpacity
            onPress={() => {
              closeMenu();
              dispatch(removeVerseFromFav(item));
              forceUpdate();
            }}
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingVertical: 16,
              justifyContent: 'space-between',
              backgroundColor: getColorTheme().lightPrimary,
            }}>
            <Text
              style={{
                fontSize: getFontSize(16),
                lineHeight: 24,
                fontWeight: '400',
                color: getColorTheme().text,
              }}>
              {t('25')}
            </Text>
            <FontAwesome
              name="trash-o"
              size={24}
              color={getColorTheme().darkPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingVertical: 16,
              justifyContent: 'space-between',
              backgroundColor: getColorTheme().lightPrimary,
            }}>
            <Text
              style={{
                fontSize: getFontSize(16),
                lineHeight: 24,
                fontWeight: '400',
                color: getColorTheme().text,
              }}>
              {t('12')}
            </Text>
            <MaterialIcons
              name={'ios-share'}
              color={getColorTheme().darkPrimary}
              size={24}
            />
          </TouchableOpacity>
        </Menu>
      ) : (
        <FavIcon item={item} style={{height: 32, width: 32}} />
      )}
    </TouchableOpacity>
  );
}
