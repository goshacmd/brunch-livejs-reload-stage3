import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from 'components/App';

// should get rid of that
import _ from 'react-proxy';

// detect if we're loading for the first time or reloading
if (!window.store) {
  window.store = createStore(counterApp, 0);
} else {
  window.store.replaceReducer(counterApp);
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={window.store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
});
