import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swiftpwa-be.testingnow.me/graphql',
  cache: new InMemoryCache(),
});

export default client;
