import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import SafeAreaScreen from "../components/SafeAreaScreen";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaScreen>
      <View style={styles.page}>
      <Text style={styles.header}>INDEX SCREEN</Text>
      <Button title="Go CART" onPress={() => router.push("./cart.tsx")} />
      <Button title="Go to Welcome" onPress={() => router.push("./(tabs)/index.tsx")} />
      <Button title="Go to Account" onPress={() => router.push("./account.tsx")} />
      <Button title="Go to Payment" onPress={() => router.push("./(tabs)/payments.tsx")} />
    </View>
    </SafeAreaScreen>
  );
}
const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#bbbbbb",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
  }
});