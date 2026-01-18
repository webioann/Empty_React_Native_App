import ThemeProvider from "@/context/ThemeContext";
import { Stack } from "expo-router";

function Index_Layout() {
  return (
    <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />;
    </ThemeProvider>
  )
}
export default Index_Layout;