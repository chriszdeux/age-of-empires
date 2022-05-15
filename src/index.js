import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { persist_store, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/styles.scss';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
  <PersistGate loading={ null } persistor={ persist_store }>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);