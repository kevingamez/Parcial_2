import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Cafes from './components/Cafes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap';

import { IntlProvider } from 'react-intl';
import localeEn from './locales/en.json';
import localeEs from './locales/es.json';


const userLocale = navigator.language || navigator.userLanguage;

const messagesMap = {
  en: localeEn,
  es: localeEs,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={userLocale} messages={messagesMap[userLocale.slice(0, 2)]}>
    <Container fluid>
      
      <hr/>
      <Cafes/>
       

    </Container>
  </IntlProvider>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
