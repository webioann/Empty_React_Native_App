import { StyleSheet, Text } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";

export default function My_Orders_Screen() {
    return (
        <SafeAreaView px={16} inset={true}>
            <Text style={styles.header}>Orders SCREEN</Text>
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