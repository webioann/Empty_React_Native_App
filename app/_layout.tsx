import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    {/* Home Screen */}
    <Stack.Screen 
      name="index" 
      options={{ 
        title: "home", 
      }} 
    />
    {/* Products Screen */}
    <Stack.Screen 
      name="screens/Products_Screen" 
      options={{ 
        title: "products" ,
        headerBackTitle: "Back",
      }} 
    />
    {/* Cart Screen */}
    <Stack.Screen 
      name="screens/Account_Screen" 
      options={{ 
        title: "account",
      }} 
      />
  </Stack>;
}
