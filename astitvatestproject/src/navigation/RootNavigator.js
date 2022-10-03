import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../Screens/HomeScreen';
import HomeScreen from '../screens/HomeScreen';
// import SignUp from '../Screens/SignUp';
// import LogIn from '../Screens/LogIn';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';
import Dashboard from '../screens/Dashboard';
const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
