import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './screens/RootNavigator';
import utilities from './tailwind.json';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://blackhawk.stepzen.net/api/blackhawk/__graphql',
  headers: { 'Authorization': 'apikey blackhawk::stepzen.io+1000::68c25871448df3b5e2cdcf2eddeb9ebea3705a5bf450b0efd836e679c312f0b9' },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider
    <TailwindProvider utilities={utilities} >
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
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
