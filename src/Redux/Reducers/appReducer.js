import images from '../../Images';
import {
  CHANGE_MODE_START,
  CHANGE_MODE_SUCCESS,
  CHANGE_MODE_FAILED,
  CHANGE_ONBOARDING_SHOW,
  CHANGE_NOTIFICATION_STATE_START,
  CHANGE_NOTIFICATION_STATE_SUCCESS,
  CHANGE_NOTIFICATION_STATE_FAILED,
  CHANGE_LANGUAGE_START,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_LANGUAGE_FAILED,
  CHANGE_REMINDER_TIME,
  CHANGE_BACKGROUND_START,
  CHANGE_BACKGROUND_SUCCESS,
} from '../Actions/Types';

const INIT_STATE = {
  isRTL: false,
  notificationState: null,
  reminderTime: {hours: 10, minutes: 0},
  darkMode: false,
  isOnBoardingShow: false,
  backgroundType: 2,
  backgroundImage: images.backgroundImage,
  error: null,
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_MODE_START:
      return {...state, loading: true, error: null};
    case CHANGE_MODE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        darkMode: action.payload,
      };
    case CHANGE_MODE_FAILED:
      return {...state, loading: false, error: action.payload};

    case CHANGE_ONBOARDING_SHOW:
      return {...state, isOnBoardingShow: true};

    case CHANGE_NOTIFICATION_STATE_START:
      return {...state, loading: true, error: null};
    case CHANGE_NOTIFICATION_STATE_SUCCESS:
      return {...state, loading: false, notificationState: action.payload};
    case CHANGE_NOTIFICATION_STATE_FAILED:
      return {...state, loading: false, notificationState: action.payload};

    case CHANGE_REMINDER_TIME:
      return {...state, reminderTime: action.payload};

    case CHANGE_LANGUAGE_START:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        isRTL: action.payload,
      };
    case CHANGE_LANGUAGE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CHANGE_BACKGROUND_START:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_BACKGROUND_SUCCESS:
      return {
        ...state,
        loading: false,
        backgroundType: action.payload.type,
        backgroundImage: action.payload.image,
      };

    default:
      return state;
  }
};
