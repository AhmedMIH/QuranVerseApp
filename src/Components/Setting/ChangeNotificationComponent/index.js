import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Switch} from 'react-native-paper';
import styles from '../styles';
import {formatTime, getColorTheme} from '../../../Utils/Helper';
import {changeNotificationState} from '../../../Redux/Actions';
import TimePickerModal from '../../TimePicker/TimePickerModal';

const index = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [isExpand, setIsExpand] = useState(false);
  const [visible, setVisible] = useState(false);
  const {reminderTime, notificationState} = useSelector(state => state.app);
  const formattedTime = formatTime(reminderTime.hours, reminderTime.minutes);

  return (
    <View style={styles.outerContainer}>
      <View
        style={[
          styles.innerContainer,
          {
            borderBottomWidth: 0,
            borderBottomColor: getColorTheme().borderColor,
          },
        ]}>
        <Text style={styles.mainText}>{t('8')}</Text>
        <TouchableOpacity onPress={() => setIsExpand(!isExpand)}>
          <MaterialIcons
            name={isExpand ? 'expand-less' : 'expand-more'}
            size={24}
            color={getColorTheme().darkPrimary}
          />
        </TouchableOpacity>
      </View>
      {isExpand && (
        <>
          <View style={[styles.expandItem]}>
            <Text style={styles.mainText}>{t('21')}</Text>
            <Switch
              style={{marginRight: -6}}
              value={notificationState}
              onValueChange={value => dispatch(changeNotificationState(value))}
              color={getColorTheme().fillProgressBar}
            />
          </View>
          <View style={styles.expandItem}>
            <Text style={styles.mainText}>{t('22')}</Text>
            <Text
              onPress={() => {
                setVisible(true);
              }}
              style={styles.reminderTime}>
              {formattedTime.time}
              {t(formattedTime.meridiem)}
            </Text>
          </View>
        </>
      )}
      <TimePickerModal
        visible={visible}
        onToggle={value => setVisible(value)}
      />
    </View>
  );
};

export default index;
