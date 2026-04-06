import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from "../components/SpalshScreen";
import LogInScreen from "../components/LoginScreen";
import OtpVarification from "../components/OtpVarification";
import HomeStack from "./HomeStack";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeStack} />
     <Stack.Screen name="Splash" component={SplashScreen} />
     <Stack.Screen name="Login" component={LogInScreen} />
     <Stack.Screen name="OtpVerification" component={OtpVarification} />
    </Stack.Navigator>
  );
}