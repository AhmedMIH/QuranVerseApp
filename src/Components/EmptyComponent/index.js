import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getThemeColor, getFontSize, responsiveHeight } from '../../Utils/Helper'
import { useSelector } from 'react-redux'
import styles from './styles'
import { useTranslation } from 'react-i18next'

const index = ( { text, onPressRefresh } ) => {
    const { darkMode } = useSelector( state => state.app )
    const { t } = useTranslation()

    return (
        <View style={styles( darkMode ).container}>
            <Text style={styles( darkMode ).title}>{text}</Text>
            {onPressRefresh &&
                <TouchableOpacity style={styles( darkMode ).clickableContainer} onPress={onPressRefresh}>
                    <Text style={styles( darkMode ).title}>{t( 36 )}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default index