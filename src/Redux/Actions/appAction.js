import {requestNotifications} from 'react-native-permissions';
import RNRestart from 'react-native-restart';
import {
  CHANGE_THEME_START,
  CHANGE_THEME_SUCCESS,
  CHANGE_THEME_FAILED,
  CHANGE_ONBOARDING_SHOW,
  CHANGE_NOTIFICATION_STATE_START,
  CHANGE_NOTIFICATION_STATE_SUCCESS,
  CHANGE_NOTIFICATION_STATE_FAILED,
  CHANGE_MODE_START,
  CHANGE_MODE_SUCCESS,
  CHANGE_LANGUAGE_START,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_REMINDER_TIME,
} from './Types';
import i18next from 'i18next';
import {I18nManager} from 'react-native';

export function changeMode(darkMode) {
  return async dispatch => {
    dispatch({
      type: CHANGE_MODE_START,
    });

    dispatch({type: CHANGE_MODE_SUCCESS, payload: !darkMode});
  };
}

export function changeOnBoardingState() {
  return async dispatch => {
    dispatch({
      type: CHANGE_ONBOARDING_SHOW,
    });
  };
}

export function changeNotificationState() {
  return async dispatch => {
    dispatch({
      type: CHANGE_NOTIFICATION_STATE_START,
    });
    await requestNotifications(['alert', 'sound'])
      .then(({status}) => {
        dispatch({
          type: CHANGE_NOTIFICATION_STATE_SUCCESS,
          payload: status === 'granted',
        });
      })
      .catch(err => {
        dispatch({
          type: CHANGE_NOTIFICATION_STATE_FAILED,
          payload: false,
        });
      });
  };
}

export function changeReminderTime(clock) {
  return async dispatch => {
    dispatch({
      type: CHANGE_REMINDER_TIME,
      payload: clock,
    });
  };
}

export function changeLanguage(isRTL) {
  return async dispatch => {
    dispatch({
      type: CHANGE_LANGUAGE_START,
    });
    I18nManager.allowRTL(!isRTL);
    I18nManager.forceRTL(!isRTL);
    dispatch({type: CHANGE_LANGUAGE_SUCCESS, payload: !isRTL});
    RNRestart.restart();
  };
}
