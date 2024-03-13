import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ProgressBar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { connect, useSelector } from 'react-redux';
import {
  changeOnBoardingState,
  changeNotificationState,
  changeReminderTime,
} from '../Redux/Actions';
import images from '../Images';
import {
  getThemeColor,
  getFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../Utils/Helper';
import TimePicker from '../Components/TimePicker';

const OnBoardingScreen = ( {
  changeOnBoardingState,
  changeNotificationState,
  changeReminderTime,
  notificationState,
} ) => {
  const navigation = useNavigation();
  const [ progress, setProgress ] = useState( 0.5 );
  const { t } = useTranslation();
  const [ clock, setClock ] = useState( { hours: 10, minutes: 0 } );
  const { darkMode } = useSelector( state => state.app )


  const handleContinuePress = async () => {
    if ( progress === 0.5 ) {
      setProgress( 0.75 );
    } else if ( progress === 0.75 ) {
      changeReminderTime( clock );
      setProgress( 1 );
      await changeNotificationState();
      changeOnBoardingState();
    }
  };

  if ( progress === 1 && notificationState ) {
    navigation.navigate( 'MainTab' );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: responsiveHeight( 44 ),
        paddingHorizontal: responsiveWidth( 25.5 ),
        alignItems: 'center',
        backgroundColor: getThemeColor( darkMode ).white,
      }}>
      <ProgressBar
        progress={progress}
        style={{
          width: responsiveWidth( 280 ),
          height: responsiveHeight( 4 ),
          backgroundColor: getThemeColor( darkMode ).infillProgressBar,
        }}
        fillStyle={{
          backgroundColor: getThemeColor( darkMode ).fillProgressBar,
        }}
      />
      {progress === 0.5 ? (
        <View
          style={{
            marginTop: responsiveHeight( 32 ),
            width: 240,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: getFontSize( 22 ),
              color: getThemeColor( darkMode ).text,
              lineHeight: 28,
              textAlign: 'center',
            }}>
            {t( '1' )}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: getFontSize( 16 ),
              color: getThemeColor( darkMode ).text,
              lineHeight: 24,
              marginVertical: responsiveHeight( 16 ),
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
            {t( '2' )}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: getFontSize( 16 ),
              color: getThemeColor( darkMode ).text,
              lineHeight: 24,
              textAlign: 'center',
              letterSpacing: 0.15,
            }}>
            {t( '3' )}
          </Text>
          <Image
            style={{
              height: 330,
              width: responsiveWidth( 339 ),
              marginVertical: responsiveHeight( 48 ),
            }}
            source={images.onBoardingImage}
            resizeMode="center"
          />
        </View>
      ) : (
        <View
          style={{
              marginTop: responsiveHeight( 32 ),
            width: 240,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '400',
                fontSize: getFontSize( 22 ),
                color: getThemeColor( darkMode ).text,
              lineHeight: 28,
              textAlign: 'center',
            }}>
              {t( '5' )}
          </Text>
          <Text
            style={{
              fontWeight: '400',
                fontSize: getFontSize( 16 ),
                color: getThemeColor( darkMode ).text,
              lineHeight: 24,
                marginVertical: responsiveHeight( 16 ),
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
              {t( '6' )}
          </Text>
          <TimePicker clock={clock} setClock={setClock} />
        </View>
      )}
      <Button
        onPress={async () => handleContinuePress()}
        style={{
          backgroundColor: getThemeColor( darkMode ).fillProgressBar,
          width: responsiveWidth( 105 ),
          height: responsiveHeight( 45 ),
        }}
        labelStyle={{
          fontWeight: '400',
          fontSize: getFontSize( '14' ),
          lineHeight: 20,
          textAlign: 'center',
          letterSpacing: 0.1,
        }}
        textColor={getThemeColor( darkMode ).white}>
        {t( '4' )}
      </Button>
    </View>
  );
};

const mapStateToProps = ( { app } ) => {
  return {
    notificationState: app.notificationState,
  };
};

export default connect( mapStateToProps, {
  changeOnBoardingState,
  changeNotificationState,
  changeReminderTime,
} )( OnBoardingScreen );

const styles = StyleSheet.create( {} );
