import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductScreen from '../screens/home/ProductScreen';
import AppHeader from '../components/comman/AppHeader';
import DetailsScreen from '../screens/home/DetailsScreen';
import Rechedule from '../screens/home/Reschedule';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


export default function HomeStack() {
  return (
     <SafeAreaView style={{ flex: 1 }}>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          header: () => <AppHeader title="Kitchen Appliances" isHelpVisible subTitle='Today 7AM' />, 
        }}
        />

      <Stack.Screen
        name="Reschedule"
        component={Rechedule}
        options={{
          header: () => <AppHeader title="Rechedule" />, 
        }}
      />
    </Stack.Navigator>
    </SafeAreaView>
  );
}
