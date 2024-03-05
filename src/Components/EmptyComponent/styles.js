import { StyleSheet } from "react-native";
import { getFontSize, getThemeColor, responsiveHeight, responsiveWidth } from "../../Utils/Helper";

export default styles = ( darkMode ) => StyleSheet.create( {
    container: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center',
        marginVertical: responsiveHeight( 32 )
    },
    title: {
        fontSize: getFontSize( 20 ),
        color: getThemeColor( darkMode ).text,
        fontWeight: '600'
    },
    clickableContainer: {
        backgroundColor: getThemeColor( darkMode ).primary,
        paddingHorizontal: responsiveWidth( 16 ),
        marginTop: responsiveHeight( 16 ),
        paddingVertical: responsiveHeight( 8 ),
        borderRadius: 8
    }
} )