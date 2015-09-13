import React, { PropTypes, Component } from 'react';
import Subscriptions from './Subscriptions';
import CallCharges from './CallCharges';
import StoreOrders from './StoreOrders';
import $ from 'jquery';


class InvoiceES6 extends Component {
  constructor() {
    super();
    this.state = {
      'subscriptions': {
        'subscriptions': []
      },
      'callCharges': {
        'calls': []
      },
      'skyStore': {
        'buyAndKeep': [],
        'rentals': []
      }
    }
  };
  componentDidMount() {
    $.ajax({
      url: this.props.source,
      dataType: 'json',
      cache: false,
      success: function(billData) {
        this.setState({
          total: billData.total,
          subscriptions: billData.package,
          callCharges: billData.callCharges,
          skyStore: billData.skyStore,
          date: billData.statement.generated,
          dueDate: billData.statement.due,
          fromDate: billData.statement.period.from,
          toDate: billData.statement.period.to
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };
  render() {
    let invoice = 'Invoice';
    let date = 'Date';
    let dateDue = 'Due';
    let dateFrom = 'From';
    let dateTo = 'To';
    let total = 'Total';
    let period = 'Period';
    return (
      <div className="invoice">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <h1>{invoice}</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-4 col-lg-4 pull-left">
                  <div className="panel panel-default height">
                      <div className="panel-heading">{date}</div>
                      <div className="panel-body">
                        <div><strong>{date}: </strong>{this.state.date}</div>
                        <div><strong>{dateDue}: </strong>{this.state.dueDate}</div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-4 pull-right">
                  <div className="panel panel-default height">
                      <div className="panel-heading">{period}</div>
                      <div className="panel-body">
                        <div><strong>{dateFrom}: </strong>{this.state.fromDate}</div>
                        <div><strong>{dateTo}: </strong>{this.state.toDate}</div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <h2><strong>{total}</strong></h2>
          </div>
          <div className="col-xs-6 text-right">
            <h2><strong>{this.state.total}</strong></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Subscriptions data={this.state.subscriptions} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <CallCharges data={this.state.callCharges} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <StoreOrders data={this.state.skyStore} />
          </div>
        </div>
      </div>
    );
  }
}
export default InvoiceES6;