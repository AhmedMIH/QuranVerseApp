import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './styles';
import {responsiveHeight} from '../../Utils/Helper';

const MyModal = ({children, isVisible, onToggle}) => {
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
            <View>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MyModal;
