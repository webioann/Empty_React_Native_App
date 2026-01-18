import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import ColoredList from "../../components/ColoredList";
import SafeAreaScreen from "../../components/SafeAreaScreen";

export default function Shop_Screen() {
    return (
        <SafeAreaScreen>
            <Link href={'../(auth)/'} asChild>
                <Text>Go Home</Text>
            </Link>
            <ColoredList color="purple" />
        </SafeAreaScreen>
    );
}
const styles = StyleSheet.create({
});