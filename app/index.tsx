import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import App from "./App";

export default function Index() {
  const router = useRouter();
  return (
    <App>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.page}>
          <Text style={styles.header}>INDEX SCREEN</Text>
          <Button title="Go to Products" onPress={() => router.push("./screens/Products_Screen")} />
          <Button title="Go to Cart" onPress={() => router.push("./(tabs)/Cart_Screen")} />
          <Button title="Go to Account" onPress={() => router.push("./screens/Account_Screen")} />
          <Button title="Go to Payment" onPress={() => router.push("./(tabs)/Payment_Screen")} />
        </View>
      </SafeAreaView>
    </App>
  );
}
const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
  }
});