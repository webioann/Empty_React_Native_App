import { StyleSheet, Text } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function Payment_Screen() {
    return (
        <SafeAreaView px={16} inset={true}>
            <Text style={styles.header}>PAYMENT SCREEN</Text>
        </SafeAreaView>
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