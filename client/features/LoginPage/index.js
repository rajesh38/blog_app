import React from 'react';
import ReactDom from 'react-dom';
import ConfigureStore from './store/ConfigureStore';
import { AppContainer } from 'react-hot-loader';
// import App from './App';

// const initState = window.__INITIAL_STATE__;
// const store = ConfigureStore(initState);
const rootElement = document.getElementById("react-app");

ReactDom.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootElement
)

if (module.hot) { module.hot.accept() }