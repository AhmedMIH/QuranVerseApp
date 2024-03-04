import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Switch } from 'react-native-paper';
import styles from '../styles';
import { formatTime, getColorTheme, utcToLocal } from '../../../Utils/Helper';
import { changeNotificationState } from '../../../Redux/Actions';
import TimePickerModal from '../../TimePicker/TimePickerModal';

const index = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [ isExpand, setIsExpand ] = useState( false );
  const [ visible, setVisible ] = useState( false );
  const { reminderTime, notificationState, darkMode } = useSelector( state => state.app );
  const convertTimeHour = utcToLocal( reminderTime.hours, reminderTime.minutes ).hours
  const convertTimeMin = utcToLocal( reminderTime.hours, reminderTime.minutes ).minutes
  const formattedTime = formatTime( convertTimeHour, convertTimeMin );

  return (
    <View style={styles( darkMode ).outerContainer}>
      <View
        style={[
          styles( darkMode ).innerContainer,
          {
            borderBottomWidth: 0,
            borderBottomColor: getColorTheme( darkMode ).borderColor,
          },
        ]}>
        <Text style={styles( darkMode ).mainText}>{t( '8' )}</Text>
        <TouchableOpacity onPress={() => setIsExpand( !isExpand )}>
          <MaterialIcons
            name={isExpand ? 'expand-less' : 'expand-more'}
            size={24}
            color={getColorTheme( darkMode ).darkPrimary}
          />
        </TouchableOpacity>
      </View>
      {isExpand && (
        <>
          <View style={[ styles( darkMode ).expandItem ]}>
            <Text style={styles( darkMode ).mainText}>{t( '21' )}</Text>
            <Switch
              style={{ marginRight: -6 }}
              value={notificationState}
              onValueChange={value => dispatch( changeNotificationState( value ) )}
              color={getColorTheme( darkMode ).fillProgressBar}
            />
          </View>
          <View style={styles( darkMode ).expandItem}>
            <Text style={styles( darkMode ).mainText}>{t( '22' )}</Text>
            <Text
              onPress={() => {
                setVisible( true );
              }}
              style={styles( darkMode ).reminderTime}>
              {formattedTime.time}
              {t( formattedTime.meridiem )}
            </Text>
          </View>
        </>
      )}
      <TimePickerModal
        visible={visible}
        onToggle={value => setVisible( value )}
      />
    </View>
  );
};

export default index;
