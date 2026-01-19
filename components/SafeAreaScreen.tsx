import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { StatusBar, StatusBarStyle, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaView = ({ children }: { children: React.ReactNode }) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme()
    const device_theme = useColorScheme()

    return (
        <View style={{ 
            paddingTop: insets.top,
            flex: 1, 
            backgroundColor: theme.bg_main,
            padding: 16
            }}>
            <StatusBar  barStyle={ 
                device_theme === 'dark' ? 'light-content' : 'dark-content' as StatusBarStyle} 
                backgroundColor={theme.bg_main} />
            {children}
        </View>
    )
}

export default SafeAreaView;

