/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import AppNavigation from './src/Routes/AppNavigation';
import {store, persistor} from './src/Redux/Store';
import './src/Localization/i18n';
import DefaultReactNativePaperTheme from './src/Utils/DefaultReactNativePaperTheme';

function App(): React.JSX.Element {
  const onBeforeLift = () => {
    // take some action before the gate lifts
  };

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <PaperProvider theme={DefaultReactNativePaperTheme}>
      <Provider store={store}>
        <PersistGate
          loading={SplashScreen.show()}
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle={'dark-content'}
          />
          <AppNavigation />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}
export default App;
