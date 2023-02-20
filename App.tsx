import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './screens/RootNavigator';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider
    <TailwindProvider utilities={utilities} >
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider >
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
