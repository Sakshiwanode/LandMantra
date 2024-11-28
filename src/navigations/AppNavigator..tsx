import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/first';
import Second from '../screens/Second';
import LoginScreen from '../screens/Login';
import OTPScreen from '../screens/OTPVerify';
import LoanScreen from '../screens/LoanApply';
import AadharScreen from '../screens/AadharVerify';
import UserDetailScreen from '../screens/UserDetail';
import BankDetailScreen from '../screens/BankDetail';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
      <Stack.Screen 
          name="login"
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="OTPVerify"
          component={OTPScreen} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="LoanApply"
          component={LoanScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="AadharVerify"
          component={AadharScreen} 
          options={{ headerShown: false }} 
        />
<Stack.Screen 
          name="UserDetail"
          component={UserDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BankDetail"
          component={BankDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="first"
          component={FirstScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Second"
          component={Second} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>

  );
};

export default AppNavigator;
