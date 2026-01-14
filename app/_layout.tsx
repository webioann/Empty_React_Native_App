import { Stack } from "expo-router";

function RootLayout() {
  return  <Stack>
    <Stack.Screen 
      name="index" 
      options={{ 
        title: "shop" , 
      }} 
    />
    <Stack.Screen 
      name="cart" 
      options={{ 
        title: "cart" ,
        headerBackTitle: "Back",
      }} 
    />
    <Stack.Screen 
      name="account" 
      options={{ 
        title: "account",
      }} 
      />
  </Stack>;
}
export default RootLayout;