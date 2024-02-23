import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ItemList from './ItemList';
import {useTranslation} from 'react-i18next';
import images from '../../../Images';
import Colors from '../../../Utils/Colors';
import {getColorTheme} from '../../../Utils/Helper';
import RandomizeList from './Randomize/RandomizeList';

const SelectThemeContainer = ({onToggle}) => {
  const {t} = useTranslation();
  const imageList = [
    images.backgroundImage,
    images.backgroundImage2,
    images.backgroundImage3,
    images.backgroundImage4,
    images.backgroundImage5,
    images.backgroundImage6,
  ];

  const colorList = [
    getColorTheme().lemon,
    getColorTheme().pastel,
    getColorTheme().pink,
    getColorTheme().lavender,
    getColorTheme().lightPrimary,
    getColorTheme().diamond,
    getColorTheme().pinkLace,
    getColorTheme().lightPastel,
  ];

  const randomizeList = [[...colorList], [...imageList]];

  return (
    <View style={styles.modalContainer}>
      <ItemList title={t('26')} data={colorList} type={1} onToggle={onToggle} />
      <ItemList title={t('27')} data={imageList} type={2} onToggle={onToggle} />
      <RandomizeList title={t('28')} data={randomizeList} onToggle={onToggle} />
    </View>
  );
};

export default SelectThemeContainer;
