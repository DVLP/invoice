import InvoiceActions from '../actions/InvoiceActions'
import axios from 'axios'

const InvoiceSource = {
  fetchInvoice: {
  	
    remote(state) {
   		return axios.get(`https://still-scrubland-9880.herokuapp.com/bill.json?id={state.value}`)
    },

    loading: InvoiceActions.loadingInvoice,
    success: InvoiceActions.showInvoice,
    error: InvoiceActions.errorLoadingInvoice,

    // should fetch has precedence over the value returned by local in determining whether remote should be called
    // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
    shouldFetch(state) {
      return true
    }
  }
}

export default InvoiceSource