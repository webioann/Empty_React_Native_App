import { useTheme } from '@/context/ThemeContext';
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

function Agreement_Layout() {
    const theme = useTheme()
    
    return (
        <View style={[styles.container]}>
            <Stack 
                screenOptions={{
                    headerStyle: { backgroundColor: theme.bg_main },
                    headerShadowVisible: false,
                    headerTintColor: theme.text_main,
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                }}
            />
        </View>
    );
}
export default Agreement_Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});