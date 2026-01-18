import { Colors } from "@/constants/Colors";
import type { ColorsList } from "@/types/colors.types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Appearance, useColorScheme } from 'react-native';

export const  useThemeColors = () => {
    const initialTheme = Colors.light;
    const [theme, setTheme] = useState<ColorsList>(initialTheme)
    const colorScheme  = useColorScheme()
    const storageName = 'theme';

    useEffect(() => {
        const getTheme = async() => {
            const storedTheme = await AsyncStorage.getItem( storageName ); 
            if( storedTheme === 'dark' ) { 
                Appearance.setColorScheme('dark')
                setTheme(Colors.dark)
            }
            if( storedTheme === 'light' ) { 
                Appearance.setColorScheme('light')
                setTheme(Colors.light)
            }
            if( storedTheme === null && colorScheme === 'light') {
                await AsyncStorage.setItem(storageName, 'light')
                setTheme(Colors.light)
            }
            if( storedTheme === null && colorScheme === 'dark') {
                await AsyncStorage.setItem(storageName, 'dark')
                setTheme(Colors.dark)
            }
            else { 
                await AsyncStorage.setItem(storageName, 'light')
                Appearance.setColorScheme('light')
                setTheme(Colors.light)
            }
        }
        getTheme();
    }, [])

    return { ...theme }
};

