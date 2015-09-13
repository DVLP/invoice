import { Dispatcher } from 'flux';

class InvoiceDispatcherClass extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

let InvoiceDispatcher = new InvoiceDispatcherClass();

export default InvoiceDispatcher;