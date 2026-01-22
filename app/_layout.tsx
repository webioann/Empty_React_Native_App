import CartProvider from "@/context/Redux";
import ThemeProvider from "@/context/ThemeContext";
import { Stack } from "expo-router";

function Index_Layout() {
  return (
    <CartProvider>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />;
      </ThemeProvider>
    </CartProvider>
  )
}
export default Index_Layout;