import SafeAreaScreen from '@/components/SafeAreaScreen';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

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

            <Text style={[styles.auth_footer, {color: 'grey' }]}>
                By signing up, you agree to our
                <Link href="../agreements/terms" asChild>
                    <Text style={styles.link_blue}> Terms, </Text>
                </Link>
                {""}
                <Link href="../agreements/privacy" asChild>
                    <Text style={styles.link_blue}> Privacy Policy, </Text>
                </Link>
                { "and " }
                <Link href="../agreements/cookie_use" asChild>
                    <Text style={styles.link_blue}>Cookie Use .</Text>
                </Link>
            </Text>
        </SafeAreaScreen>
    )
}

export default Auth_Screen;

const styles = StyleSheet.create({
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
        marginVertical: 10,
        padding: 5,
        width: '80%',
        alignSelf: 'center',
    },
    btn_image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    auth_footer: {
        width: '80%',
        marginTop: 20,
        marginHorizontal: 'auto',
        lineHeight: 24,
    },
    link_blue: { 
        color: 'blue',
        fontWeight: 600 ,
        fontSize: 14
    }
})