import { View, Text } from 'react-native'
import React from 'react'
import { getColorTheme, getFontSize, responsiveHeight } from '../../Utils/Helper'

const index = ( { text } ) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight( 32 ) }}>
            <Text style={{ fontSize: getFontSize( 20 ), color: getColorTheme().text, fontWeight: '600' }}>{text}</Text>
        </View>
    )
}

export default index