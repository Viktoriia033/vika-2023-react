import ReactDOM from "react-dom/client";
import React from "react";
export * from './store/store'
export * from './reducers/base.reducer'
export * from './action/index'
import App from "../App";
import {Provider} from "react-redux";
import {store} from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);