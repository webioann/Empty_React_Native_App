import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome_Screen() {
    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.header}>WELCOME SCREEN</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
    }
});