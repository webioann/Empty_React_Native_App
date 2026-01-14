import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaScreen from "../components/SafeAreaScreen";

export default function Index() {
  return (
    <SafeAreaScreen>
      <View style={styles.page}>
        <Text style={styles.header}>INDEX SCREEN</Text>
        <Link href="./(app)/">Go to Shop app</Link>
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
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
  }
});