import React from 'react'
import { Appearance, Switch, useColorScheme, View } from 'react-native'

const ThemeSwitcher = () => {
    const scheme = useColorScheme()

    return (
        <View >
            <Switch
                value={scheme === 'dark'}
                onChange={() => {
                Appearance.setColorScheme(scheme === 'dark' ? 'light' : 'dark');
                }}
            />
        </View>
    )
}

export default ThemeSwitcher;

