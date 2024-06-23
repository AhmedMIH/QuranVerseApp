/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import {PersistGate} from 'redux-persist/integration/react';

import DefaultReactNativePaperTheme from './src/Utils/DefaultReactNativePaperTheme';
import PushController from './src/Utils/PushController/PushController';
import AppNavigation from './src/Routes/AppNavigation';
import {store, persistor} from './src/Redux/Store';
import toastConfig from './src/Utils/toastConfig';
import './src/Localization/i18n';

function App(): React.JSX.Element {
  const onBeforeLift = () => {
    // take some action before the gate lifts
  };

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultReactNativePaperTheme}>
        <PersistGate
          loading={<></>}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle={'dark-content'}
          />
          <AppNavigation />
        </PersistGate>
        <Toast config={toastConfig} />
      </PaperProvider>
      <PushController />
    </Provider>
  );
}
export default App;
