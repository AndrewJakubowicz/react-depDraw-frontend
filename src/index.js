import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import * as ReactRedux from 'react-redux';

import { rootReducer } from './reducers/reducer';
import App from './App';
import './index.css';

let store = createStore(rootReducer);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
