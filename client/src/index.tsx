import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import AppRouter from './app';
import store from './store';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppRouter />
    <GlobalStyle />
  </ReduxProvider>,
  document.getElementById('root'),
);
