import { Appearance, StyleSheet, Switch, Text, useColorScheme, View } from 'react-native';
import ColoredList from "../../components/ColoredList";
import SafeAreaScreen from "../../components/SafeAreaScreen";

export default function Profile_Screen() {
    const colorScheme = useColorScheme(); 
    return (
        <SafeAreaScreen>
            <View >
                <Text>Current Theme: {colorScheme}</Text>
                {/* Toggle the color scheme */}
                <Switch
                    value={colorScheme === 'dark'}
                    onChange={() => {
                    Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
                    }}
                />
                </View>
            <ColoredList color="green" />
        </SafeAreaScreen>
    );
}
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "blue",
    }
});