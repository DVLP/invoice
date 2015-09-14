'use strict';
var React = require('react/addons');

var StoreOrders = React.createClass({
  render: function() {
    return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3><strong>Sky store</strong></h3>
      </div>
      <div className="panel-body">
      <table className="table table-condensed">
          <thead>
            <tr>
              <td className="highrow" colSpan="2"><h4>Rentals</h4></td>
            </tr>
            <tr>
                <td className="col-xs-10"><strong>Title</strong></td>
                <td className="col-xs-1 text-right"><strong>Cost</strong></td>
            </tr>
          </thead>
          <ItemList data={this.props.data.rentals} />
        </table>
        <table className="table table-condensed">
          <thead>
            <tr>
              <td className="highrow" colSpan="2"><h4>Buy And Keep</h4></td>
            </tr>
            <tr>
              <td className="col-xs-10"><strong>Title</strong></td>
              <td className="col-xs-1 text-right"><strong>Cost</strong></td>
            </tr>
          </thead>
          <ItemList data={this.props.data.buyAndKeep} />
          <tfoot>
            <tr>
              <td className="highrow text-right"><strong>Total</strong></td>
              <td className="highrow text-right">{this.props.data.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    );
  }
});

var ItemList = React.createClass({
  render: function() {
    if(this.props.data) {
      var nodes = this.props.data.map(function (item) {
        return (
          <tr>
            <td>{item.title}</td>
            <td className="text-right">{item.cost}</td>
          </tr>
        );
      });  
    } else {
      var nodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        );
      };
    }
    
    return (
      <tbody className="ItemList">
        {nodes}
      </tbody>
    );
  }
});

module.exports = StoreOrders;