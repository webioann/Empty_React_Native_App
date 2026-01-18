import { Colors } from '@/constants/Colors';
import type { ColorsList } from '@/types/colors.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type contextValue = {
    theme: ColorsList
    toggleTheme: () => Promise<void>
}

export const ThemeContext = createContext<contextValue | null>(null);
export const useTheme = () => useContext(ThemeContext);

const THEME_STORAGE_KEY = '@app_theme';

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<ColorsList>(Colors.light); 
    const device_theme = useColorScheme()

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedTheme === 'light') {
                    setTheme(Colors.light);                
                }
                if (savedTheme === 'dark') { 
                    setTheme(Colors.dark);                
                }
                if (savedTheme === null) {  
                    setTheme(Colors.light);                
                }
            } catch (error) {
                console.error('Failed to load theme from storage', error);
            }
        };

        loadTheme();
    }, []);

    // Function to toggle theme and save to AsyncStorage
    const toggleTheme = async () => {
        const newTheme = device_theme === 'light' ? 'dark' : 'light';
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
            setTheme(Colors[newTheme]);
        } catch (e) {
            console.error('Failed to save theme to storage', e);
        }
    };
    const valueProps: contextValue = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={ valueProps }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

