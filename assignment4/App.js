import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {ApolloProvider} from '@apollo/client';
import client from './apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
