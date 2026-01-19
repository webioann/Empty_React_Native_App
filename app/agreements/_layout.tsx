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
                color: 'red'
            },
        }}/>
    );
}
export default Agreement_Layout;

