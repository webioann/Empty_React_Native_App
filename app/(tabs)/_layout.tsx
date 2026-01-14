import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabLayout() {
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
