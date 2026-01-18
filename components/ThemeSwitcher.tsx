import React from 'react'
import { Appearance, StyleSheet, Switch, useColorScheme, View } from 'react-native'

const ThemeSwitcher = () => {
    const scheme = useColorScheme()

    return (
        <View style={styles.switch_wrapper}>
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

const styles = StyleSheet.create({
    switch_wrapper: {

    }
})