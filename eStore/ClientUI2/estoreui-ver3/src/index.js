import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import axios from "axios";
//import * as _redux from "./redux";
//import store, { persistor } from "./redux/store";
//import "./index.scss"; // Standard version
//import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
//import "socicon/css/socicon.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./_metronic/_assets/plugins/flaticon/flaticon.css";
// import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
// import {
//   MetronicLayoutProvider,
//   MetronicSplashScreenProvider,
//   MetronicSubheaderProvider
// } from "./_metronic/layout";
 import {AksI18nProvider} from "./_estore/i18n";
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
 const { PUBLIC_URL } = process.env;

 /**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
//_redux.setupAxios(axios, store);


ReactDOM.render(
  <React.StrictMode>
    <AksI18nProvider>
    <App />
    </AksI18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
