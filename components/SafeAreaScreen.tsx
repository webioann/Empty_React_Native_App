import React from 'react';
import { StatusBar, StatusBarStyle, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaScreen = ({ children }: { children: React.ReactNode }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top , flex: 1, backgroundColor: 'yellow' }}>
            <StatusBar barStyle={'dark-content' as StatusBarStyle} backgroundColor="yellow" />
            {children}
        </View>
    )
}

export default SafeAreaScreen;