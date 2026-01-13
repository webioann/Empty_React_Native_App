import { StyleSheet, Text, View } from "react-native";

export default function Welcome_Screen() {
    return (
        <View style={styles.page}>
        <Text style={styles.header}>WELCOME SCREEN</Text>
        </View>
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
        marginBottom: 20,
        color: "blue",
    }
});