import { StyleSheet, Text } from "react-native";
import SafeAreaScreen from "../../components/SafeAreaScreen";

export default function Profile_Screen() {
    return (
        <SafeAreaScreen>
            <Text style={styles.header}>PROFILE SCREEN</Text>
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