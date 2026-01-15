import { StyleSheet } from "react-native";
import ColoredList from "../../components/ColoredList";
import SafeAreaScreen from "../../components/SafeAreaScreen";

export default function Shop_Screen() {
    return (
        <SafeAreaScreen>
            <ColoredList color="purple" />
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