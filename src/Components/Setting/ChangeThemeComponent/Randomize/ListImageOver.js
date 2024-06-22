import {View, Image} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from '../../../../Utils/Helper';
import styles from './styles';
import { useSelector } from 'react-redux';

const ListImageOver = ({list, type}) => {
  const { darkMode } = useSelector( ( state ) => state.app );

  return (
    <View style={{flexDirection: 'row', marginTop: 12}}>
      {list.map((item, index) => (
        <View
          key={index}
          style={[
            styles(darkMode).overflowContainer,
            {
              backgroundColor: type === 1 ? item : 'black',
              marginLeft: index === 0 ? 0 : -30,
            },
          ]}>
          {type === 2 && (
            <Image
              source={item}
              style={{
                height: responsiveHeight(65),
                width: responsiveWidth(45),
                borderRadius: 8,
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default ListImageOver;
