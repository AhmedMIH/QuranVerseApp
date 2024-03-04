/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import DefaultReactNativePaperTheme from './src/Utils/DefaultReactNativePaperTheme';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import AppNavigation from './src/Routes/AppNavigation';
import {store, persistor} from './src/Redux/Store';
import './src/Localization/i18n';
import toastConfig from './src/Utils/toastConfig';
import PushController from './src/Utils/PushController/PushController'


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
          <Toast config={toastConfig}/>
      </PaperProvider>
      <PushController />
    </Provider>
  );
}
export default App;
