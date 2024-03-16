import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { useSelector } from 'react-redux';

const PushController = () => {
    const { reminderTime, notificationState } = useSelector( state => state.app );
    useEffect( () => {
        // Subscribe to a topic
        const subscribeToTopic = async () => {
            try {
                await messaging().subscribeToTopic( `${ reminderTime.hours }-${ reminderTime.minutes }` );
                console.log( 'Subscribed to topic successfully' );
            } catch ( error ) {
                console.error( 'Error subscribing to topic:', error );
            }
        };

        subscribeToTopic();

        // Firebase onMessage handler
        messaging().onMessage( async ( message ) => {
            console.log( 'Foreground message received:', message );

            // Display notification if available
            if ( message.notification && notificationState ) {
                await onDisplayNotification( message.notification );
            }
        } );

        // Firebase background message handler
        messaging().setBackgroundMessageHandler( async ( remoteMessage ) => {
            console.log( 'Background message received:', remoteMessage );

            // Display notification if available
            if ( remoteMessage.notification && notificationState ) {
                await onDisplayNotification( remoteMessage.notification );
            }

            // Return a promise to indicate completion
            return Promise.resolve();
        } );
    }, [] );

    async function onDisplayNotification ( notification ) {
        // Request permissions (required for iOS)
        await notifee.requestPermission();

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel( {
            id: 'default',
            name: 'Default Channel',
        } );

        // Display a notification
        await notifee.displayNotification( {
            title: notification.title,
            body: notification.body,
            android: {
                channelId,
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        } );
    }

    return null; // This component doesn't render anything visible to the user
};

export default PushController;
