//var debug = require('debug')('Example:createMessageAction');
import InvoiceDispatcher from '../dispatchers/InvoiceDispatcher.js';
import InvoiceStore from '../stores/InvoiceStore';
import ActionTypes from '../constants/ActionTypes';

export default {
    fetch: () => {
        HelloSlave.fetch().then((data) => {
            InvoiceDispatcher.handleAction({
                type: ActionTypes.FETCHING,
                data: data
            });
        })
    }
}

module.exports = function (context, payload, done) {
    var invoiceStore = context.getStore(InvoiceStore);
    var invoice = invoiceStore.createMessage({
        data: payload
    });
    //debug('dispatching SHOW_INVOICE', invoice);
    context.dispatch('SHOW_INVOICE', [invoice]);
    context.service.create('invoice', invoice, {}, function (err) {
        if (err) {
            //debug('dispatching SHOW_INVOICE_FAILURE', invoice);
            context.dispatch('SHOW_INVOICE_FAILURE', [invoice]);
            done();
            return;
        }
        //debug('dispatching SHOW_INVOICE_SUCCESS', invoice);
        context.dispatch('SHOW_INVOICE_SUCCESS', [invoice]);
        done();
    });
};

/*
// fetch data using a slave
export default {
    fetch: () => {
        HelloSlave.fetch().then((data) => {
            AppDispatcher.handleAction({
                type: HelloConstants.FETCHING,
                data: data
            });
        })
    }
}
*/