import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Mobile App text</Text>
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