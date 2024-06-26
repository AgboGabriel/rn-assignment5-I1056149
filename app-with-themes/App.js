// // // // // // import { StatusBar } from 'expo-status-bar';
// // // // // // import { StyleSheet, Text, View,Image } from 'react-native';
// // // // // // import Homescreen from './components/home';

// // // // // // export default function App() {
// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       {/* <View style={{position:'absolute',top:100,left:30,width:110}}>
// // // // // //         <Image source={require('./components/Images/profile.png')}/>
// // // // // //         <View style={styles.profileText}>
// // // // // //         <Text style={{color:"#95969D",fontSize:15}}>Welcome back,</Text>
// // // // // //         <Text style={{fontSize:20}}>Eric Atsu</Text>
// // // // // //         </View>
// // // // // //         <View>
// // // // // //           <Image/>
// // // // // //         </View>
// // // // // //       </View>
      
// // // // // //       <StatusBar style="auto" /> */}
// // // // // //       <Homescreen/>
// // // // // //     </View>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: '#fff',
// // // // // //     alignItems: 'center',
// // // // // //     justifyContent: 'center',
   
// // // // // //   },
 
// // // // // // });

// // // // // import React, { useState, useEffect, createContext, useContext } from 'react';
// // // // // import { NavigationContainer } from '@react-navigation/native';
// // // // // import { createStackNavigator } from '@react-navigation/stack';
// // // // // import { View, Text, Button, StyleSheet } from 'react-native';
// // // // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // // // import Homepage from './components/home';
// // // // // import Settings from './components/Settings';

// // // // // const Stack = createStackNavigator();

// // // // // const ThemeContext = createContext();

// // // // // const getInitialTheme = async () => {
// // // // //   const storedTheme = await AsyncStorage.getItem('theme');
// // // // //   return storedTheme || 'light';
// // // // // };

// // // // // const App = () => {
// // // // //   const [theme, setTheme] = useState('light');

// // // // //   useEffect(() => {
// // // // //     (async () => {
// // // // //       const initialTheme = await getInitialTheme();
// // // // //       setTheme(initialTheme);
// // // // //     })();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     AsyncStorage.setItem('theme', theme);
// // // // //   }, [theme]);

// // // // //   const toggleTheme = () => {
// // // // //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// // // // //   };

// // // // //   return (
// // // // //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// // // // //       <NavigationContainer>
// // // // //         <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
// // // // //           {/* <Stack.Screen name="Home" component={HomepageWithTheme} /> */}
// // // // //           <Stack.Screen name="Settings" component={SettingsWithTheme} />
// // // // //         </Stack.Navigator>
// // // // //       </NavigationContainer>
// // // // //     </ThemeContext.Provider>
// // // // //   );
// // // // // };

// // // // // const HomepageWithTheme = (props) => {
// // // // //   const { theme } = useContext(ThemeContext);
// // // // //   return <Homepage {...props} theme={theme} />;
// // // // // };

// // // // // const SettingsWithTheme = (props) => {
// // // // //   const { theme, toggleTheme } = useContext(ThemeContext);
// // // // //   return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
// // // // // };

// // // // // export default App;





// // // // import React, { useState, useEffect, createContext, useContext } from 'react';
// // // // import { NavigationContainer } from '@react-navigation/native';
// // // // import { createStackNavigator } from '@react-navigation/stack';
// // // // import { View, Text, Button, StyleSheet } from 'react-native';
// // // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // // import Homepage from './components/home';
// // // // import Settings from './components/Settings';

// // // // const Stack = createStackNavigator();

// // // // const ThemeContext = createContext();

// // // // const getInitialTheme = async () => {
// // // //   try {
// // // //     const storedTheme = await AsyncStorage.getItem('theme');
// // // //     return storedTheme || 'light';
// // // //   } catch (error) {
// // // //     console.error('Failed to load theme:', error);
// // // //     return 'light';
// // // //   }
// // // // };

// // // // const App = () => {
// // // //   const [theme, setTheme] = useState('light');

// // // //   useEffect(() => {
// // // //     (async () => {
// // // //       const initialTheme = await getInitialTheme();
// // // //       setTheme(initialTheme);
// // // //     })();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     AsyncStorage.setItem('theme', theme).catch(error => console.error('Failed to save theme:', error));
// // // //   }, [theme]);

// // // //   const toggleTheme = () => {
// // // //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// // // //   };

// // // //   return (
// // // //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// // // //       <NavigationContainer>
// // // //         <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
// // // //           <Stack.Screen name="Home" component={HomepageWithTheme} />
// // // //           <Stack.Screen name="Settings" component={SettingsWithTheme} />
// // // //         </Stack.Navigator>
// // // //       </NavigationContainer>
// // // //     </ThemeContext.Provider>
// // // //   );
// // // // };

// // // // const HomepageWithTheme = (props) => {
// // // //   const { theme } = useContext(ThemeContext);
// // // //   return <Homepage {...props} theme={theme} />;
// // // // };

// // // // const SettingsWithTheme = (props) => {
// // // //   const { theme, toggleTheme } = useContext(ThemeContext);
// // // //   return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
// // // // };

// // // // export default App;

// // // import 'react-native-gesture-handler';
// // // import React, { useState, useEffect, createContext, useContext } from 'react';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createStackNavigator } from '@react-navigation/stack';
// // // import { StyleSheet } from 'react-native';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // import Settings from './components/Settings';

// // // const Stack = createStackNavigator();

// // // const ThemeContext = createContext();

// // // const getInitialTheme = async () => {
// // //   try {
// // //     const storedTheme = await AsyncStorage.getItem('theme');
// // //     return storedTheme || 'light';
// // //   } catch (error) {
// // //     console.error('Failed to load theme:', error);
// // //     return 'light';
// // //   }
// // // };

// // // const App = () => {
// // //   const [theme, setTheme] = useState('light');

// // //   useEffect(() => {
// // //     (async () => {
// // //       const initialTheme = await getInitialTheme();
// // //       setTheme(initialTheme);
// // //     })();
// // //   }, []);

// // //   useEffect(() => {
// // //     AsyncStorage.setItem('theme', theme).catch(error => console.error('Failed to save theme:', error));
// // //   }, [theme]);

// // //   const toggleTheme = () => {
// // //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// // //   };

// // //   return (
// // //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// // //       <NavigationContainer>
// // //         <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
// // //           <Stack.Screen name="Settings" component={SettingsWithTheme} />
// // //         </Stack.Navigator>
// // //       </NavigationContainer>
// // //     </ThemeContext.Provider>
// // //   );
// // // };

// // // const SettingsWithTheme = (props) => {
// // //   const { theme, toggleTheme } = useContext(ThemeContext);
// // //   return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
// // // };

// // // export default App;


// // import 'react-native-gesture-handler';
// // import React, { useState, useEffect, createContext, useContext } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // import Homescreen from './components/home';
// // import Settings from './components/Settings';

// // const Stack = createStackNavigator();

// // const ThemeContext = createContext();

// // const getInitialTheme = async () => {
// //   try {
// //     const storedTheme = await AsyncStorage.getItem('theme');
// //     return storedTheme || 'light';
// //   } catch (error) {
// //     console.error('Failed to load theme:', error);
// //     return 'light';
// //   }
// // };

// // const App = () => {
// //   const [theme, setTheme] = useState('light');

// //   useEffect(() => {
// //     (async () => {
// //       const initialTheme = await getInitialTheme();
// //       setTheme(initialTheme);
// //     })();
// //   }, []);

// //   useEffect(() => {
// //     AsyncStorage.setItem('theme', theme).catch(error => console.error('Failed to save theme:', error));
// //   }, [theme]);

// //   const toggleTheme = () => {
// //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
// //   };

// //   return (
// //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// //       <NavigationContainer>
// //         <Stack.Navigator initialRouteName="Homescreen" screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="Homescreen" component={HomepageWithTheme} /> {/* Correctly reference the component */}
// //           <Stack.Screen name="Settings" component={SettingsWithTheme} />
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     </ThemeContext.Provider>
// //   );
// // };

// // const HomepageWithTheme = (props) => {
// //   const { theme } = useContext(ThemeContext);
// //   return <Homescreen {...props} theme={theme} />;
// // };

// // const SettingsWithTheme = (props) => {
// //   const { theme, toggleTheme } = useContext(ThemeContext);
// //   return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
// // };

// // export default App;

// import 'react-native-gesture-handler';
// import React, { useState, useEffect, createContext, useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Homescreen from './components/Homescreen';
// import Settings from './components/Settings';

// const Stack = createStackNavigator();

// const ThemeContext = createContext();

// const getInitialTheme = async () => {
//   try {
//     const storedTheme = await AsyncStorage.getItem('theme');
//     return storedTheme || 'light';
//   } catch (error) {
//     console.error('Failed to load theme:', error);
//     return 'light';
//   }
// };

// const App = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     (async () => {
//       const initialTheme = await getInitialTheme();
//       setTheme(initialTheme);
//     })();
//   }, []);

//   useEffect(() => {
//     AsyncStorage.setItem('theme', theme).catch(error => console.error('Failed to save theme:', error));
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Homescreen" screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Homescreen" component={HomepageWithTheme} />
//           <Stack.Screen name="Settings" component={SettingsWithTheme} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ThemeContext.Provider>
//   );
// };

// const HomepageWithTheme = (props) => {
//   const { theme } = useContext(ThemeContext);
//   return <Homescreen {...props} theme={theme} />;
// };

// const SettingsWithTheme = (props) => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
// };

// export default App;

// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './components/Homescreen';
import Settings from './components/Settings';
import { lightTheme, darkTheme } from './components/Theme';

const Stack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState('light'); // State to manage current theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Determine current theme styles based on state
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen
          name="Settings"
          // Pass toggleTheme function and current theme to Settings screen
          initialParams={{ toggleTheme: toggleTheme, currentTheme: currentTheme }}
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
