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
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native'


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

  
messaging().onMessage(async (message) => {
  console.log('Foreground message received:', message);

  // Extract topic from message
  const topic = message.data.topic;

 

  // Display notification if available
  if (message.notification) {
    await onDisplayNotification(message.notification);
  }
});

// Initialize Firebase Messaging background message handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Background message received:', remoteMessage);

  // Extract topic from remoteMessage
  const topic = remoteMessage.data.topic;

  // Display notification if available
  if (remoteMessage.notification) {
    await onDisplayNotification(remoteMessage.notification);
  }

  // Return a promise to indicate completion
  return Promise.resolve();
});

async function onDisplayNotification(notification) {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    title: notification.title,
    body: notification.body,
    android: {
      channelId,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}
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
