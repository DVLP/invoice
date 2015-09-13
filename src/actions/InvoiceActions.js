import alt from '../alt';

class InvoiceActions {
  loadingInvoice() {
    return false
  }
  showInvoice(data) {
    return data
  }
  errorLoadingInvoice() {
    return false
  }
}

export default alt.createActions(InvoiceActions)