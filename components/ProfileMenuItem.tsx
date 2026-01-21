import { useTheme } from '@/context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type link = "/profile" | "/my_orders" | "/addresses" | "/wishlist";
type icons = "person-outline" | "list-outline" | "location-outline" | "heart-outline";
interface IMenuItemProps {
    pathTo: link
    title: string
    iconName: icons
    color: string
}

const ProfileMenuItem = ({pathTo, title, iconName, color}: IMenuItemProps) => {
    const theme = useTheme();
    
    const onMenuItemPress = (path: link) => {
        if (path === "/profile") return;
        router.push(path);
    };

    return (
        <TouchableOpacity 
            style={[styles.main_link, {backgroundColor: theme.bg_second}]}
            onPress={()=> onMenuItemPress(pathTo)}
            activeOpacity={0.7}>
            <View style={[styles.icon_box, {backgroundColor: color + "20"}]}>
                <Ionicons name={iconName} size={34} color={color} />
            </View>
            <Text style={{color: theme.text_main, fontSize: 18}}>
                {title}
            </Text>
        </TouchableOpacity>    
    )
}

export default ProfileMenuItem;

const styles = StyleSheet.create({
    main_link: {
        width: '47%', 
        height: 110,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
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
})