import { mockUsers } from '@/constants/mock_user_data';
import { useTheme } from '@/context/ThemeContext';
import type { User } from '@/types/pet_api_example.js';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaView from "../../components/SafeAreaView";


const Profile_Screen = () => {
    const theme = useTheme();
    const user: User = mockUsers[0] 

    const capitalize = (word: string) => {
        if (word.length === 0) return word
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return (
        <SafeAreaView px={16} inset={true}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 40, flex: 1, paddingTop: 16}}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                >
                {/* ===== HEADER ===== */}
                <View style={[styles.profile_header, {backgroundColor: theme.bg_second}]}>
                    {/* === USER AVATAR === */}
                    <View style={styles.avatar}>
                        <Image 
                            source={{uri: user.imageUrl}} 
                            style={{flex: 1, zIndex: 1}} 
                            resizeMode='contain'
                        />
                        {/* === THIS BLOCK DISPLAY IF IMAGE DO NOT WORK ===*/}
                        <View  style={[styles.holder, {backgroundColor: theme.green}]}>
                            <Text style={{color: theme.text_main, fontSize: 44, textAlign: 'center', fontWeight: '600'}}>
                                {user.username.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                        {/* ================================================ */}
                        {/* <View style={styles.badge}>
                            <MaterialIcons name="check-circle" size={24} color={theme.green} />
                        </View> */}
                    </View>
                    <View style={styles.user_info}>
                        <Text style={{color: theme.text_main, fontSize: 24, fontWeight: '800'}}>
                            {capitalize(user.username)}
                        </Text>
                        <Text style={{color: theme.text_main}}>{user.email}</Text>
                    </View>
                </View>
                {/* ===== MAIN CENTRAL SECTION ==== */}
                <View style={styles.main}>
                    <Link 
                        href="../(profile)/addresses" 
                        style={[styles.main_link, {backgroundColor: theme.bg_second}]}
                        asChild>
                        <TouchableOpacity 
                            // style={{backgroundColor: 'red'}}
                            activeOpacity={0.7}>
                            <View style={styles.icon_box}>
                                <MaterialIcons name="check-circle" size={44} color={theme.red} />
                            </View>
                            <Text>Edit Profile</Text>
                        </TouchableOpacity>    
                    </Link>


                    
                    <View style={[styles.main_link, {backgroundColor: theme.bg_second}]}></View>
                    <View style={[styles.main_link, {backgroundColor: theme.bg_second}]}></View>
                    <View style={[styles.main_link, {backgroundColor: theme.bg_second}]}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile_Screen;

const styles = StyleSheet.create({
    profile_header: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        borderRadius: 16,
        gap: 24
    },
    avatar: {
        width: 70, 
        height: 70,
        borderRadius: '50%', 
        overflow: 'hidden',
        backgroundColor: '#cccccc',
        position: 'relative'
    },
    holder: {
        position: 'absolute', 
        zIndex: -100, 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0
    },
    // badge: {
    //     position: 'absolute', 
    //     zIndex: 100, 
    //     width: 26,
    //     height: 26,
    //     borderRadius: '50%',
    //     overflow: 'hidden',
    //     bottom: 3, 
    //     right: 3

    // },
    user_info: {

    },
    //  ==== MAIN CENTRAL SECTION ======
    main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: 16,
        marginTop: 16,
        // padding: 5
    },
    main_link: {
        width: '45%',
        height: 150,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24
    },
    icon_box: {
        width: 50,
        height: 50,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 128, 0, 0.5)'
    }
});