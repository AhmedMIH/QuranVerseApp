import {View, Image} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from '../../../../Utils/Helper';
import styles from './styles';

const ListImageOver = ({list, type}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 12}}>
      {list.map((item, index) => (
        <View
          style={[
            styles.overflowContainer,
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
