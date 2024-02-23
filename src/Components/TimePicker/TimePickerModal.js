import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from '../Modal';
import TimePicker from './index';
import {getColorTheme, getFontSize, responsiveWidth} from '../../Utils/Helper';
import {useDispatch, useSelector} from 'react-redux';
import {changeReminderTime} from '../../Redux/Actions';

const TimePickerModal = ({visible, onToggle}) => {
  const dispatch = useDispatch();
  const {reminderTime} = useSelector(state => state.app);
  const [clock, setClock] = useState(reminderTime);

  return (
    <Modal isVisible={visible} onToggle={onToggle}>
      <TimePicker marginVertical={16} clock={clock} setClock={setClock} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: 16,
          marginHorizontal: responsiveWidth(16),
        }}>
        <TouchableOpacity onPress={() => onToggle(false)}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: getFontSize(14),
              color: getColorTheme().fillProgressBar,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            //toggle and update time
            {
              dispatch(changeReminderTime(clock));
              onToggle(false);
            }
          }>
          <Text
            style={{
              fontWeight: '500',
              fontSize: getFontSize(14),
              color: getColorTheme().fillProgressBar,
            }}>
            Ok
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TimePickerModal;
