

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './components/Homescreen';
import Settings from './components/Settings';
import { lightTheme, darkTheme } from './components/Theme';

const Stack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen
          name="Settings"
         
          initialParams={{ toggleTheme: toggleTheme, currentTheme: currentTheme }}
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
