import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './index';
import AccountScreen from '../AccountScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
