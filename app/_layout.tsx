import { Stack } from "expo-router";

function RootLayout() {
  return  <Stack>
    <Stack.Screen 
      name="index" 
      options={{ 
        title: "home", 
      }} 
    />
    <Stack.Screen 
      name="screens/Products_Screen" 
      options={{ 
        title: "products" ,
        headerBackTitle: "Back",
      }} 
    />
    <Stack.Screen 
      name="screens/Account_Screen" 
      options={{ 
        title: "account",
      }} 
      />
  </Stack>;
}
export default RootLayout;