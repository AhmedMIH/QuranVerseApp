import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {getColorTheme} from '../../Utils/Helper';
import {useNavigation} from '@react-navigation/native';

const index = ({title, haveBack}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{flex: 1}}>
        {haveBack && (
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={getColorTheme().darkPrimary}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity disabled style={{flex: 1}}></TouchableOpacity>
    </View>
  );
};

export default index;
