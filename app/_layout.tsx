import { fakeAuthHook } from "@/controllers/auth.controllers/fakeAuth";
import { Stack } from "expo-router";

function Index_Layout() {
  const { isSignedIn } = fakeAuthHook();
  // if (!isSignedIn) return <Redirect href="./(auth)/" />;
    
  return <Stack screenOptions={{ headerShown: false }} />;
}
export default Index_Layout;