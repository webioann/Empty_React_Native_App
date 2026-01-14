import { StyleSheet, Text } from "react-native";
import SafeAreaScreen from "../../components/SafeAreaScreen";

export default function Shop_Screen() {
    return (
        <SafeAreaScreen>
            <Text style={styles.header}>SHOP SCREEN</Text>
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