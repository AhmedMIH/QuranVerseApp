import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {TimePicker} from 'react-native-paper-dates';
import {getColorTheme, getFontSize} from '../../Utils/Helper';

export default function index({clock, setClock}) {
  const [clockType, setClockType] = useState('hours');

  const onConfirm = useCallback(({hours, minutes}) => {
    setClock({hours, minutes});
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: getColorTheme().moreLight,
        borderRadius: 16,
        marginVertical: 48,
      }}>
      <TimePicker
        inputType={'picker'}
        inputFontSize={getFontSize('16')}
        focused={clockType}
        onFocusInput={type => {
          setClockType(type);
        }}
        onChange={onConfirm}
        hours={clock.hours}
        minutes={clock.minutes}
      />
    </View>
  );
}
