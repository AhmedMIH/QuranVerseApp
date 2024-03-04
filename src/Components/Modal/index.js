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
import { useSelector } from 'react-redux';

const MyModal = ({children, isVisible, onToggle}) => {
  const { darkMode } = useSelector( state => state.app )

  return (
    <Modal
      style={styles( darkMode ).modal}
      visible={isVisible}
      onRequestClose={() => onToggle(false)}
      transparent={true}
      animationType={'fade'}>
      <TouchableOpacity
        style={styles( darkMode ).outerContainer}
        activeOpacity={1}
        onPressOut={() => onToggle(false)}>
        <View style={styles( darkMode ).innerContainer}>
          <TouchableWithoutFeedback>
            <View>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MyModal;
