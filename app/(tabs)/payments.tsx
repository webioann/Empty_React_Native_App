import SafeAreaScreen from "@/components/SafeAreaScreen";
import { StyleSheet, Text } from "react-native";

export default function Payment_Screen() {
    return (
        <SafeAreaScreen>
            <Text style={styles.header}>PAYMENT SCREEN</Text>
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