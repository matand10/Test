import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { rootReducer } from './store/root-reducer';
import { App } from './App';
import './assets/style/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={rootReducer}>
    <Router>
      <App />
    </Router>
  </Provider>
);
