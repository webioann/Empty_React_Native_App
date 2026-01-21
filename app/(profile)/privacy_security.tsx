import { StyleSheet, Text } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Privacy_Security_Screen() {
    return (
        <SafeAreaView px={16} inset={true}>
            <Text style={styles.header}>Privacy_Security SCREEN</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
    }
});