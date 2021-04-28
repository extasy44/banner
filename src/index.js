import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client/react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

import App from './App';
import './index.css';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_STORE_URI,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_STORE_TOKEN,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
