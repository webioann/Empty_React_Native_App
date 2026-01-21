import ProfileMenuItem from '@/components/ProfileMenuItem';
import { useTheme } from '@/context/ThemeContext';
import { mockUsers } from '@/MOCK/mock_user_data';
import type { User } from '@/types/pet_api_example';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
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
                contentContainerStyle={{paddingBottom: 100, paddingTop: 16}}
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
                        <View  style={[styles.holder, {backgroundColor: theme.blue}]}>
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
                    <ProfileMenuItem 
                        pathTo='/profile' 
                        title='Edit Profile'
                        iconName='person-outline'
                        color={theme.blue}
                    />        
                    <ProfileMenuItem 
                        pathTo='/my_orders' 
                        title='Orders'
                        iconName='list-outline'
                        color={theme.green}
                    />        
                    <ProfileMenuItem 
                        pathTo='/addresses' 
                        title='Addresses'
                        iconName='location-outline'
                        color={theme.yellow}
                    />        
                    <ProfileMenuItem 
                        pathTo='/wishlist' 
                        title='Wishlist'
                        iconName='heart-outline'
                        color={theme.red}
                    />                            
                </View>
                {/* ==== LINKS BIG BUTTONS ========= */}
                <TouchableOpacity 
                    style={[styles.long_button, {backgroundColor: theme.bg_second, borderColor: theme.bg_second}]}
                    onPress={() => router.push("/(profile)/notification")}
                    >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16}}>
                        <FontAwesome6 name="bell" size={24} color={theme.text_main} />
                        <Text style={{color: theme.text_main, fontWeight: '600', letterSpacing: 1.2}}>
                            Notifications
                        </Text>
                    </View>
                    <FontAwesome6 name="arrow-right-long" size={16} color={theme.text_main} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.long_button, {backgroundColor: theme.bg_second, borderColor: theme.bg_second}]}
                    onPress={() => router.push("/(profile)/privacy_security")}
                    >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16}}>
                        <Ionicons name="shield-checkmark-outline" size={24} color={theme.text_main} />
                        <Text style={{color: theme.text_main, fontWeight: '600', letterSpacing: 1.2}}>
                            Privacy & Security
                        </Text>
                    </View>
                    <FontAwesome6 name="arrow-right-long" size={16} color={theme.text_main} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.long_button, {backgroundColor: theme.bg_second, borderColor: theme.red + "40"}]}
                    onPress={() => console.log('SIGN OUT')}
                    >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16}}>
                        <FontAwesome6 name="arrow-right-from-bracket" size={24} color={theme.red} />
                        <Text style={{color: theme.red, fontWeight: '600', letterSpacing: 1.2}}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>


                
                


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
        borderRadius: 12,
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
        marginVertical: 24,
    },
    //  ==== LINKS BIG BUTTONS ========= 
    long_button: {
        width: '100%',
        marginBottom: 16,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 2
    }
});