import {requestNotifications} from 'react-native-permissions';
import RNRestart from 'react-native-restart';
import {
  CHANGE_ONBOARDING_SHOW,
  CHANGE_NOTIFICATION_STATE_START,
  CHANGE_NOTIFICATION_STATE_SUCCESS,
  CHANGE_NOTIFICATION_STATE_FAILED,
  CHANGE_MODE_START,
  CHANGE_MODE_SUCCESS,
  CHANGE_LANGUAGE_START,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_REMINDER_TIME,
  CHANGE_BACKGROUND_START,
  CHANGE_BACKGROUND_SUCCESS,
} from './Types';
import {I18nManager} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import images from '../../Images';

export function changeMode(darkMode) {
  return async dispatch => {
    dispatch({
      type: CHANGE_MODE_START,
    });
    dispatch(
      changeBackground(
        2,
        !darkMode ? images.backgroundImage7 : images.backgroundImage,
      ),
    );

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

export function changeNotificationState(state) {
  return async dispatch => {
    dispatch({
      type: CHANGE_NOTIFICATION_STATE_START,
    });
    if (state === true) {
      await requestNotifications(['alert', 'sound'])
        .then(async ({status}) => {
          if (status !== null) {
            if (status) {
              const authStatus = await messaging().requestPermission();
              const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
              if (enabled) {
                token = (await messaging().getToken()).toString();
                console.log(token);
                dispatch({
                  type: CHANGE_NOTIFICATION_STATE_SUCCESS,
                  payload: status === 'granted',
                });
              } else {
                dispatch({
                  type: CHANGE_NOTIFICATION_STATE_SUCCESS,
                  payload: false,
                });
              }
            }
          } else {
            dispatch({
              type: CHANGE_NOTIFICATION_STATE_SUCCESS,
              payload: status === 'granted',
            });
          }
        })
        .catch(err => {
          dispatch({
            type: CHANGE_NOTIFICATION_STATE_FAILED,
            payload: false,
          });
        });
    } else if (state === false) {
      dispatch({
        type: CHANGE_NOTIFICATION_STATE_SUCCESS,
        payload: false,
      });
    } else {
      await requestNotifications(['alert', 'sound'])
        .then(async ({status}) => {
          if (status !== null) {
            if (status) {
              const authStatus = await messaging().requestPermission();
              const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
              if (enabled) {
                dispatch({
                  type: CHANGE_NOTIFICATION_STATE_SUCCESS,
                  payload: status === 'granted',
                });
              } else {
                dispatch({
                  type: CHANGE_NOTIFICATION_STATE_SUCCESS,
                  payload: false,
                });
              }
            }
          } else {
            dispatch({
              type: CHANGE_NOTIFICATION_STATE_SUCCESS,
              payload: status === 'granted',
            });
          }
        })
        .catch(err => {
          dispatch({
            type: CHANGE_NOTIFICATION_STATE_FAILED,
            payload: false,
          });
        });
    }
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
    setTimeout(() => RNRestart.restart(), 10);
  };
}

export function changeBackground(type, image) {
  return async dispatch => {
    dispatch({
      type: CHANGE_BACKGROUND_START,
    });

    dispatch({type: CHANGE_BACKGROUND_SUCCESS, payload: {type, image}});
  };
}
