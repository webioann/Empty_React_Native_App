import SafeAreaScreen from '@/components/SafeAreaScreen'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Auth_Screen = () => {
    return (
        <SafeAreaScreen>
            <View style={styles.auth_screen}>
                <Text>index vvvvvv</Text>
            </View>
        </SafeAreaScreen>
    )
}

export default Auth_Screen;

const styles = StyleSheet.create({
    auth_screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})