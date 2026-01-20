import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ColoredList from "../../components/ColoredList";
import SafeAreaView from "../../components/SafeAreaView";

export default function Profile_Screen() {
    const colorScheme = useColorScheme(); 
    return (
        <SafeAreaView px={16} inset={true}>
            <View >
                <Text>Current Theme: {colorScheme}</Text>
            </View>
            <ColoredList color="green" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
});