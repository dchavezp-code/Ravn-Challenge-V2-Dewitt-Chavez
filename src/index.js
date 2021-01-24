import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import client from './services/api/config';
import {ApolloProvider} from '@apollo/client';
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root')
);
