import { StyleSheet } from "react-native";
import ColoredList from "../../components/ColoredList";
import SafeAreaView from "../../components/SafeAreaView";

export default function Cart_Screen() {
    return (
        <SafeAreaView px={16} inset={true}>
            <ColoredList color="blue" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
});