import { useTheme } from '@/context/ThemeContext';
import { Stack } from "expo-router";

function Agreement_Layout() {
    const theme = useTheme()
    
    return (
        <Stack 
            screenOptions={{
                headerStyle: { backgroundColor: theme.bg_main },
                headerShadowVisible: false,
                headerTintColor: theme.text_main,
                headerTitleStyle: {
                    fontWeight: '600',
                    color: theme.text_main
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="privacy" options={{title: 'Privacy police'}} />
            <Stack.Screen name="terms" options={{title: 'Usage terms'}} />
            <Stack.Screen name="cookie_use" options={{title: 'Cookie usage terms'}} />
        </Stack>
    );
}
export default Agreement_Layout;

