'use strict';
var React = require('react/addons');
var Subscriptions = require('./Subscriptions');
var CallCharges = require('./CallCharges');
var StoreOrders = require('./StoreOrders');
var $ = require('jquery');

var Invoice = React.createClass({
  getInitialState: function() {
    return {
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
    };
  },

  componentDidMount: function() {
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

  },

  render: function() {
    return (
      <div className="invoice">
        <div className="row">
          <div className="col-xs-12">
            <div className="header">
              <h1>Invoice</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-4 col-lg-4 pull-left">
                  <div className="panel panel-default height">
                      <div className="panel-heading">Date</div>
                      <div className="panel-body">
                        <div><strong>Date: </strong>{this.state.date}</div>
                        <div><strong>Due: </strong>{this.state.dueDate}</div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-12 col-md-4 col-lg-4 pull-right">
                  <div className="panel panel-default height">
                      <div className="panel-heading">Period</div>
                      <div className="panel-body">
                        <div><strong>From: </strong>{this.state.fromDate}</div>
                        <div><strong>To: </strong>{this.state.toDate}</div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <h2><strong>Total</strong></h2>
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
});

module.exports = Invoice;