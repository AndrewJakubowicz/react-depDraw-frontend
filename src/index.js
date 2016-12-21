import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import * as ReactRedux from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './reducers/reducer';
import { getFileTokenEpic } from './epics/epics';
import App from './App';
import './index.css';


import * as a from './actions/actions';


const epicMiddleware = createEpicMiddleware(getFileTokenEpic);

// Create our store logger.
const logger = createLogger();

let store = createStore(rootReducer,
            applyMiddleware(epicMiddleware, logger)
            );

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
);


setTimeout(_ => {
  store.dispatch(a.fetchFileTokens('examples/ex3.ts'));
}, 3000);
