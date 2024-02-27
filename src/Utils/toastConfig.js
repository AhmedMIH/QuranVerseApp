// App.jsx
import { BaseToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';
import { getFontSize, responsiveHeight, responsiveWidth } from './Helper';
import colors from './Colors';

/*
  1. Create the config
*/
const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 24,
                fontWeight: '800',
            }}
        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: ( { text1 } ) => (
        <View
            style={{
                height: responsiveHeight( 48 ),
                width: responsiveWidth( 326 ),
                borderRadius: 8,
                backgroundColor: '#D83B57',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Text style={{ backgroundColor: colors.white, fontSize: getFontSize( 16 ), fontWeight: '400' }} >
                {text1}
            </Text>
        </View>
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ( { text1, props } ) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    ),
};

export default toastConfig;