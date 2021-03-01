import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Description from './screens/description';

const Stack = createStackNavigator(); 

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Description" component={Description} />

      </Stack.Navigator>
   
    </NavigationContainer>
  );
}

