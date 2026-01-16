import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

function Agreement_Layout() {
    const bg_colors = 'white'
    const tx_color = 'black'
    return (
        <View style={styles.container}>
            <Stack 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: bg_colors,
                        
                    },
                    headerTintColor: tx_color,
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                }}
            />
        </View>
    );
}
export default Agreement_Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});