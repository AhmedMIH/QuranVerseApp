import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';
import { getColorTheme } from '../../../Utils/Helper';
import BottomSheet from '../../BottomSheet';
import SelectThemeContainer from './SelectThemeContainer';
import { useSelector } from 'react-redux';

const index = () => {
  const { t } = useTranslation();
  const [ modalVisible, setModalVisible ] = useState( false );
  const { darkMode } = useSelector( ( state ) => state.app );

  return (
    <View style={styles( darkMode ).innerContainer}>
      <Text style={styles( darkMode ).mainText}>{t( '10' )}</Text>
      <TouchableOpacity onPress={() => setModalVisible( true )}>
        <MaterialIcons
          name="imagesearch-roller"
          size={24}
          color={getColorTheme( darkMode ).darkPrimary}
        />
      </TouchableOpacity>
      <BottomSheet isVisible={modalVisible} onToggle={setModalVisible}>
        <SelectThemeContainer onToggle={() => setModalVisible( false )} />
      </BottomSheet>
    </View>
  );
};

export default index;
