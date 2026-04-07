import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import AppHeader from '../components/comman/AppHeader';
import DetailsScreen from '../screens/home/DetailsScreen';
import Reschedule from '../screens/home/Reschedule';
import { SafeAreaView } from 'react-native-safe-area-context';
import CancalScreenSummary from '../screens/home/CancalSummayScreen';
import CancelRequestScreen from '../screens/home/CancelRequestScreen';
import PaymentSummarScreen from '../screens/home/PaymentSummaryScreen';

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
        component={Reschedule}
        options={{
          header: () => <AppHeader title="Rechedule" />, 
        }}
      />

       <Stack.Screen
        name="Cancel"
        component={CancalScreenSummary}
        options={{
          header: () => <AppHeader title="Cancel The Booking" />, 
        }}
      />
       <Stack.Screen
        name="CancelBooking"
        component={CancelRequestScreen}
        options={{
          header: () => <AppHeader title="Kitchen Appliances" isHelpVisible ={false} subTitle='Today 7AM' />, 
        }}
      />
        <Stack.Screen
        name="PaymentSummary"
        component={PaymentSummarScreen}
        options={{
          header: () => <AppHeader title="Payment Summary" isHelpVisible={false} />, 
        }}
      />
    </Stack.Navigator>
    </SafeAreaView>
  );
}
