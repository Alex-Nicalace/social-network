import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store-redux";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    // <React.StrictMode>
    // из-за этого тега на 49 уроке в users дублировался массив
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    // </React.StrictMode>
    ,document.getElementById('root')
)


//RerenderDOM();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
