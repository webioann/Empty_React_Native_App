import { useTheme } from '@/context/ThemeContext';
import { Stack } from "expo-router";

function Profile_Layout() {
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
            <Stack.Screen name="addresses" options={{title: 'Addresses'}} />
            <Stack.Screen name="my_orders" options={{title: 'My Orders'}} />
            <Stack.Screen name="notification" options={{title: 'Notification'}} />
            <Stack.Screen name="privacy_security" options={{title: 'Privacy and Security'}} />
            <Stack.Screen name="wishlist" options={{title: 'Wish List'}} />
        </Stack>
    );
}
export default Profile_Layout;

