import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return <Tabs>
    <Tabs.Screen 
      name="index" 
      options={{ 
        title: "home", 
        tabBarIcon: () => (<Entypo name="home" size={24} color="red" />),
        headerShown: false,
      }} 
    />
    <Tabs.Screen 
      name="./Payments_Screen" 
      options={{ 
        title: "payments" ,
        tabBarIcon: () => (<MaterialIcons name="payment" size={24} color="black" />),
      headerShown: false,
      }} 
    />
    <Tabs.Screen 
      name="./Cart_Screen" 
      options={{ 
        title: "cart", 
        tabBarIcon: () => (<FontAwesome5 name="shopping-cart" size={24} color="black" />),
        headerShown: false,
      }} 
    />
  </Tabs>;
}
