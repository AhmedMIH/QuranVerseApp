import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from '../../../Utils/Helper';
import {useDispatch} from 'react-redux';
import {changeBackground} from '../../../Redux/Actions';

const Item = ({item, type, onToggle, style}) => {
  const dispatch = useDispatch();
  const onPressItem = () => {
    dispatch(changeBackground(type, item));
    onToggle();
  };
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={[
        {
          height: responsiveHeight(150),
          width: responsiveWidth(95),
          backgroundColor: type === 1 ? item : 'black',
          marginRight: 12,
          borderRadius: 8,
        },
        style,
      ]}>
      {type === 2 && (
        <Image
          source={item}
          style={{
            height: responsiveHeight(150),
            width: responsiveWidth(95),
            borderRadius: 8,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Item;
