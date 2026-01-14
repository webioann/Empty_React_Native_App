import { Stack } from "expo-router";

function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
  // return  <Stack
  //   screenOptions={{
  //     headerStyle: { backgroundColor: "yellow" },
  //     headerTintColor: "#000",
  //     headerTitleStyle: { fontWeight: "bold" },
  //     headerShadowVisible: false,
  //     // headerBackVisible: true,
  //   }}
  // >
  //   <Stack.Screen 
  //     name="index" 
  //     options={{ 
  //       title: "shop" , 
  //     }} 
  //   />
  //   <Stack.Screen 
  //     name="cart" 
  //     options={{ 
  //       title: "cart" ,
  //       headerBackTitle: "Back",
  //     }} 
  //   />
  //   <Stack.Screen 
  //     name="account" 
  //     options={{ 
  //       title: "account",
  //     }} 
  //     />
  // </Stack>;
}
export default RootLayout;