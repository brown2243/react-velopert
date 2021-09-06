import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(myLogger, logger)); // 여러개의 미들웨어를 적용 할 수 있습니다.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))); // 여러개의 미들웨어를 적용 할 수 있습니다.


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
