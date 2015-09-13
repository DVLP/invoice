import InvoiceDispatcher from '../dispatchers/InvoiceDispatcher';
import {ActionTypes} from '../constants/ActionTypes';

let data = {
    message: ''
};

class InvoiceStore extends EventEmitter {

  getState() {
    return data;
  }

  emitChange() {
    this.emit(ActionTypes.CHANGE);
  }

  addChangeListener(cb) {
    this.on(ActionTypes.CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(ActionTypes.CHANGE, cb);
  }
}

let invoiceStore = new InvoiceStore();

export default invoiceStore;

invoiceStore.dispatchToken = InvoiceDispatcher.register((payload) => {
    let action = payload.action;
    switch(action.type) {
        case ActionTypes.FETCHING:
            data = action.data;
            invoiceStore.emitChange();
            break;
        default:
            break;
    }
});

invoiceStore.emitChange();