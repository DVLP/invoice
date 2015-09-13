import alt from '../alt';
import InvoiceActions from '../actions/InvoiceActions';
import InvoiceSource from '../sources/InvoiceSource';
import InvoiceES6 from '../components/InvoiceES6';

class InvoiceStore {
  constructor() {
    this.state = { value: '' };
    this.registerAsync(InvoiceSource);

    this.bindListeners({
      showInvoice: InvoiceActions.showInvoice
    });
  }

  onFetch() {
    if (!this.getInstance().isLoading()) {
      this.getInstance().fetchInvoice();
    }
  }

  showInvoice(result) {
    this.setState({ data: result.data });
  }
}

export default alt.createStore(InvoiceStore, 'InvoiceStore');