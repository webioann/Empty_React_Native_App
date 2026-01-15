import { fakeAuthHook } from "@/controllers/auth.controllers/fakeAuth";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Redirect, Tabs } from "expo-router";

export default function Tabs_Layout() {
  // PROTECTION ROUTE
  const { isSignedIn } = fakeAuthHook();
  if (!isSignedIn) return <Redirect href="./(auth)/" />;

  return <Tabs>
    <Tabs.Screen 
      name="index"
      options={{ 
        title: "welcome" , 
        tabBarIcon: () => (<Ionicons name="grid" size={24} color="red" />),
        headerShown: false,
      }} 
    />
    <Tabs.Screen 
      name="payments" 
      options={{ 
        title: "payments" ,
        tabBarIcon: () => (<MaterialIcons name="payment" size={24} color="black" />),
      headerShown: false,
      }} 
    />
  </Tabs>;
}
