import React, { PropTypes, Component } from 'react'
import Subscriptions from './Subscriptions'
import CallCharges from './CallCharges'
import StoreOrders from './StoreOrders'
import connectToStores from 'alt/utils/connectToStores'
import InvoiceStore from '../../stores/InvoiceStore'
import Time from 'react-time'
import styles from './InvoiceES6.css'
import withStyles from '../../decorators/withStyles'

@withStyles(styles)
@connectToStores
class InvoiceES6 extends Component {
  constructor() {
    super()
    InvoiceStore.fetchInvoice()
  }
  static getStores() {
    return [InvoiceStore]
  }

  static getPropsFromStores() {
    return InvoiceStore.getState()
  }

  render() {
    let invoice = 'Invoice'
    let date = 'Date'
    let dateDue = 'Due'
    let dateFrom = 'From'
    let dateTo = 'To'
    let total = 'Total'
    let period = 'Period'
    let loading = 'Loading invoice data'
    if(!this.props.data) {
      return (
        <div className="invoice">
          {loading}
        </div>
      )
    }
    return (
      <div className="container invoice">
        <h1>{invoice}</h1>
        <h2>{date}</h2>
        <dl className="clearfix">
          <dt>{date}:</dt>
          <dd>
            <Time value={this.props.data.statement.generated} format="DD / MM / YYYY" />
          </dd>
          <dt>{dateDue}:</dt>
          <dd>
            <Time value={this.props.data.statement.due} format="DD / MM / YYYY" />
          </dd>
        </dl>
        <h2>{period}</h2>
        <dl className="clearfix">
          <dt>{dateFrom}:</dt>
          <dd>
            <Time value={this.props.data.statement.period.from} format="DD / MM / YYYY" />
          </dd>
          <dt>{dateTo}:</dt>
          <dd>
            <Time value={this.props.data.statement.period.to} format="DD / MM / YYYY" />
          </dd>
        </dl>
        <h2 className="total">
          <span>{total}</span>
          <span className="totalValue">{this.props.data.total}</span>
        </h2>
        <Subscriptions data={this.props.data.package} />
        <CallCharges data={this.props.data.callCharges} />
        <StoreOrders data={this.props.data.skyStore} />
      </div>
    )
  }
}
export default InvoiceES6