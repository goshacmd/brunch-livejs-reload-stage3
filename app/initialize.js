import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from 'components/App';

const store = createStore(counterApp, 0);
// detect if we're loading for the first time or reloading
if (module.hot) {
  module.hot.accept('./reducers', () => {
    console.log('replacing reducers!');
    store.replaceReducer(require('./reducers').default);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
});
