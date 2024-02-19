import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import en from './en';
import ar from './ar';

import {store} from '../Redux/Store';
import {debugLog} from '../Utils/Helper';

// the translations
// (tip move them in a JSON file and import them,
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

const isRTL = store.getState().app.isRTL;

debugLog('isRTL', isRTL);
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: isRTL ? 'ar' : 'en', // language to use,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
