import { useTheme } from '@/context/ThemeContext';
import React from 'react';
import { StatusBar, StatusBarStyle, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type PropsType = {
    children: React.ReactNode
    px: number
    inset: boolean
}

const SafeAreaView = ({ children, px, inset }: PropsType) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme()
    const device_theme = useColorScheme()
    
    return (
        <View style={{
            paddingTop: inset ? insets.top : 0,
            flex: 1, 
            backgroundColor: theme.bg_main,
            paddingHorizontal: px,
            paddingBottom: px
            }}>
            <StatusBar  barStyle={ 
                device_theme === 'dark' ? 'light-content' : 'dark-content' as StatusBarStyle} 
                backgroundColor={theme.bg_main} />
            {children}
        </View>
    )
}

export default SafeAreaView;

