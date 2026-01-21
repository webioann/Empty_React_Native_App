import { useTheme } from '@/context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type link = "/profile" | "/my_orders" | "addresses" | "/wishlist";
interface IMenuItemProps {
    pathTo: link
    title: string
    iconName: string
    color: string
}

const ProfileMenuItem = ({pathTo, title, iconName, color}: IMenuItemProps) => {
    const theme = useTheme();
    
    // const handleMenuPress = ({path}: {path: link}) => {
    //     if (path === "/profile") return;
    //     router.push(path);
    // };


    return (
        <Link 
            href="/"
            style={[styles.main_link, {backgroundColor: theme.bg_second}]}
            asChild>
            <TouchableOpacity 
                activeOpacity={0.7}>
                <View style={[styles.icon_box, {backgroundColor: color + "20"}]}>
                    <MaterialIcons name="check-circle" size={44} color={color} />
                </View>
                <Text>{title}</Text>
            </TouchableOpacity>    
        </Link>
    )
}

export default ProfileMenuItem;

const styles = StyleSheet.create({
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

})