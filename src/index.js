import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";


const baseReducer = (state = 0,action) => {
console.log(state,action);
switch (action.type) {
    case 'INC':
        return state+=action.payload;

    case 'DEC':
    return --state;

    case 'reset':
        return 0;
        return state;

    default:
        return state;
}

}
let store = createStore(baseReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
