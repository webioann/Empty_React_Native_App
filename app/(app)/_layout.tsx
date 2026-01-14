import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return <Tabs>
    <Tabs.Screen 
      name="index"
      options={{ 
        title: "Shop" , 
        tabBarIcon: () => (<Ionicons name="grid" size={24} color="red" />),
        headerShown: false,
      }} 
    />
    <Tabs.Screen 
      name="cart" 
      options={{ 
        title: "Cart" ,
        tabBarIcon: () => (<FontAwesome6 name="cart-shopping" size={24} color="black" />),
      headerShown: false,
      }} 
    />
    <Tabs.Screen 
      name="profile" 
      options={{ 
        title: "Profile" ,
        tabBarIcon: () => (<MaterialIcons name="person" size={24} color="black" />),
      headerShown: false,
      }} 
    />
  </Tabs>;
}
