import React, {useEffect} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import styles from './styles';
import {responsiveHeight} from '../../Utils/Helper';

const index = ({children, isVisible, onToggle}) => {
  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      onRequestClose={() => onToggle(false)}
      transparent={true}
      animationType={'fade'}>
      <TouchableOpacity
        style={styles.outerContainer}
        activeOpacity={1}
        onPressOut={() => onToggle(false)}>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback>
            <View style={{marginTop: responsiveHeight(16)}}>
              <TouchableOpacity
                onPress={() => onToggle(false)}
                style={{flexDirection: 'row-reverse'}}></TouchableOpacity>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default index;
