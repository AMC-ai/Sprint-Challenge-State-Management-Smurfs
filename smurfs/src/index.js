import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//wrap provider
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import dataReducer from './components/reducers/dataReducer';
// import formReducer from './components/reducers/formReducer';
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
    dataReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
