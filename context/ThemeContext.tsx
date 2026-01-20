import { Colors } from '@/constants/Colors';
import type { ColorsList } from '@/types/colors.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext<ColorsList>(Colors.light);
export const useTheme = () => useContext(ThemeContext);

const THEME_STORAGE_KEY = '@app_theme';

const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<ColorsList>({...Colors.light}); 
    const device_theme = useColorScheme()

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
                if (savedTheme === 'light') {
                    setTheme({...Colors.light});                
                }
                if (savedTheme === 'dark') { 
                    setTheme({...Colors.dark});                
                }
                if (savedTheme === null && device_theme === 'light') {  
                    setTheme({...Colors.light});
                }
                if (savedTheme === null && device_theme === 'dark') {  
                    setTheme({...Colors.dark});
                }
            } catch (error) {
                console.error('Failed to load theme from storage', error);
            }
        };
        loadTheme();
    }, [device_theme]);

    return (
        <ThemeContext.Provider value={ theme }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

