import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from '../Modal';
import TimePicker from './index';
import {getColorTheme, getFontSize, responsiveWidth} from '../../Utils/Helper';
import {useDispatch, useSelector} from 'react-redux';
import {changeReminderTime} from '../../Redux/Actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const TimePickerModal = ({visible, onToggle}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {reminderTime} = useSelector(state => state.app);
  const [clock, setClock] = useState(reminderTime);

  return (
    <Modal isVisible={visible} onToggle={onToggle}>
      <TimePicker marginVertical={16} clock={clock} setClock={setClock} />
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => onToggle(false)}>
          <Text style={styles.optionText}>{t(32)}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(changeReminderTime(clock));
            onToggle(false);
          }}>
          <Text style={styles.optionText}>{t(33)}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TimePickerModal;
