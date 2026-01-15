import SafeAreaScreen from '@/components/SafeAreaScreen';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Auth_Screen = () => {
    return (
        <SafeAreaScreen>
            <Image 
                source={require('@/assets/images/auth-image.png')} 
                style={styles.auth_image}
                resizeMode='contain'
            />
            {/* oAuth Google authentication button */}
            <TouchableOpacity style={[styles.auth_button, { borderColor: '#bbbbbb'}]}>
                <Image source={require('@/assets/images/react-logo.png')} style={styles.btn_image} />
                <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 16 }}>
                    Continue with Google
                </Text>
            </TouchableOpacity>
            {/* oAuth Github authentication button */}
            <TouchableOpacity style={[styles.auth_button, { borderColor: '#bbbbbb'}]}>
                <Image source={require('@/assets/images/react-logo.png')} style={styles.btn_image} />
                <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 16 }}>
                    Continue with Github
                </Text>
            </TouchableOpacity>

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
    },
    auth_image: {
        width: '100%',
        height: 200,
        marginTop: 30
    },
    auth_button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 10,
        padding: 10,
        width: '80%',
        alignSelf: 'center',
    },
    btn_image: {
        width: 30,
        height: 30,
        marginRight: 10,
    }
})