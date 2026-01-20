import { fakeAuthHook } from '@/controllers/auth.controllers/fakeAuth';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App_Layout() {
  const insets = useSafeAreaInsets();
  // PROTECTION ROUTE
  const { isSignedIn } = fakeAuthHook();
  // if (!isSignedIn) return <Redirect href="./(auth)/" />;
  
  return <Tabs screenOptions={{
      tabBarActiveTintColor: "#1DB954",
      tabBarInactiveTintColor: "#B3B3B3",
      tabBarStyle: {
        position: "absolute",
        backgroundColor: "transparent",
        borderTopWidth: 0,
        height: 32 + insets.bottom,
        paddingTop: 2,
        marginHorizontal: 60,
        marginBottom: insets.bottom,
        borderRadius: 24,
        overflow: "hidden",
      },
      tabBarBackground: () => (
        <BlurView
          intensity={80}
          tint="dark"
          style={{position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}
        />
      ),
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 600,
      },
      headerShown: false,
    }}
  >
    <Tabs.Screen 
      name="index"
      options={{ 
        title: "Shop" , 
        tabBarIcon: () => (<Ionicons name="grid" size={24} color="red" />)
      }} 
    />
    <Tabs.Screen 
      name="cart" 
      options={{ 
        title: "Cart" ,
        tabBarIcon: () => (<FontAwesome6 name="cart-shopping" size={24} color="black" />)
      }} 
    />
    <Tabs.Screen 
      name="profile" 
      options={{ 
        title: "Profile" ,
        tabBarIcon: () => (<MaterialIcons name="person" size={24} color="black" />)
      }} 
    />
  </Tabs>;
}
