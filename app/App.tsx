import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <SafeAreaProvider>
            { children }
        </SafeAreaProvider>
    )
}

export default App;