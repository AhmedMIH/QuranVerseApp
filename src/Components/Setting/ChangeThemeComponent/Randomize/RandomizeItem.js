import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {getColorTheme, getRandomNumber} from '../../../../Utils/Helper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {changeBackground} from '../../../../Redux/Actions';
import ListImageOver from './ListImageOver';
import styles from './styles';

const RandomizeItem = ({item, index, onToggle}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const onPressItem = () => {
    dispatch(changeBackground(index + 1, item[getRandomNumber(0, 5)]));
    onToggle();
  };
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.itemContainer}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.itemText}>{t('31')}</Text>
        <MaterialIcons
          name="360"
          size={24}
          color={getColorTheme().darkPrimary}
        />
      </View>
      <Text style={styles.itemText}>{index === 0 ? t('29') : t('30')}</Text>
      <ListImageOver list={item.slice(0, 3)} type={index + 1} />
    </TouchableOpacity>
  );
};

export default RandomizeItem;
