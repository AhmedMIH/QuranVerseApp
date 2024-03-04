import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeBackground} from '../../../Redux/Actions';
import styles from './styles';

const Item = ({item, type, onToggle, style}) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector( ( state ) => state.app );

  const onPressItem = () => {
    dispatch(changeBackground(type, item));
    onToggle();
  };
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[
        styles( darkMode ).item,
        style,
        {backgroundColor: type === 1 ? item : 'black'},
      ]}>
      {type === 2 && <Image source={item} style={styles( darkMode ).image} />}
    </TouchableOpacity>
  );
};

export default Item;
