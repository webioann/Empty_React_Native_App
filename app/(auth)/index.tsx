import SafeAreaView from '@/components/SafeAreaView';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Auth_Screen = () => {
    const theme = useTheme()
    
    return (
        <SafeAreaView px={16} inset={true}>
            <Text style={{color: theme.text_main}}>{theme?.bg_main}</Text>
            <ThemeSwitcher/>
            <Image 
                source={require('@/assets/images/auth-image.png')} 
                style={styles.auth_image}
                resizeMode='contain'
            />
            {/* oAuth Google authentication button */}
            <Link href={'../(shop)/'} asChild  style={[styles.auth_button, { borderColor: theme.text_second}]}>
                <TouchableOpacity >
                    <Image source={require('@/assets/images/react-logo.png')} style={styles.btn_image} />
                    <Text style={{ fontWeight: '500', color: theme.text_main, fontSize: 16 }}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>
            </Link>
            {/* oAuth Github authentication button */}
            <TouchableOpacity style={[styles.auth_button, { borderColor: theme.text_second}]}>
                <Image source={require('@/assets/images/react-logo.png')} style={styles.btn_image} />
                <Text style={{ fontWeight: '500', color: theme.text_main, fontSize: 16 }}>
                    Continue with Github
                </Text>
            </TouchableOpacity>

            <View style={styles.auth_footer}>
                <Text style={{color: theme.text_main }}>By signing up, you agree to our </Text>
                <Link href="../agreements/terms" asChild>
                    <Text style={{color: theme.blue, fontWeight: '900'}}> Terms, </Text>
                </Link>
                <Text>  </Text>
                <Link href="../agreements/privacy" asChild>
                    <Text style={{color: theme.blue, fontWeight: '900'}}> Privacy Policy, </Text>
                </Link>
                <Text  style={{color: theme.text_main }}> and </Text>
                <Link href="../agreements/cookie_use" asChild>
                    <Text style={{color: theme.blue, fontWeight: '900'}}> Cookie Use .</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default Auth_Screen;

const styles = StyleSheet.create({
    auth_image: {
        width: '100%',
        height: 250,
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
        marginHorizontal: 'auto',
        lineHeight: 24,
    },
})