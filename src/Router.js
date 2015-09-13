/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import Invoice from './components/Invoice';
import InvoiceES6 from './components/InvoiceES6';
import showInvoice from './actions/showInvoice';

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);

  on('/login', async () => <LoginPage />);

  on('/register', async () => <RegisterPage />);

  on('/invoice', async () => <Invoice source="https://still-scrubland-9880.herokuapp.com/bill.json" />);

  on('/invoiceES6', {
        path: '/',
        method: 'get',
        action: function (context, payload, done) {
            context.executeAction(showInvoice, {}, done);
        }
    });
  
  //on('/invoiceES6', async () => <InvoiceES6 source="https://still-scrubland-9880.herokuapp.com/bill.json" />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );

});

export default router;
