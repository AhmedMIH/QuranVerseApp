import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { getThemeColor } from '../../Utils/Helper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const index = ( { title, haveBack } ) => {
  const navigation = useNavigation();
  const { darkMode, isRTL } = useSelector( state => state.app )

  return (
    <View style={styles( darkMode ).container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ flex: 1, flexDirection: 'row' }}>
        {haveBack && (
          <MaterialIcons
            name={isRTL ? "arrow-forward-ios" : "arrow-back-ios"}
            size={24}
            color={getThemeColor( darkMode ).darkPrimary}
          />
        )}
      </TouchableOpacity>
      <Text style={styles( darkMode ).title}>{title}</Text>
      <TouchableOpacity disabled style={{ flex: 1 }}></TouchableOpacity>
    </View>
  );
};

export default index;
