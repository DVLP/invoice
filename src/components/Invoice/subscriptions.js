var React = require('react/addons');

var Subscriptions = React.createClass({
  render: function() {
    return (
    /* jshint ignore:start */
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3><strong>Subscriptions</strong></h3>
      </div>
      <div className="panel-body">
        <table className="table table-condensed">
          <thead>
            <tr>
              <td className="col-xs-1"><strong>Type</strong></td>
              <td className="col-xs-10"><strong>Service name</strong></td>
              <td className="col-xs-1 text-right"><strong>Cost</strong></td>
            </tr>
          </thead>
          <SubscriptionList data={this.props.data.subscriptions} />
          <tbody>
            <tr>
              <td colSpan="2" className="highrow text-right"><strong>Total</strong></td>
              <td className="highrow text-right">{this.props.data.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    /* jshint ignore:end */
    );
  }
});

var SubscriptionList = React.createClass({
  render: function() {
    if(this.props.data) {
      var subscriptionNodes = this.props.data.map(function (subscription) {
        return (
          <tr>
            <td>{subscription.type}</td>
            <td>{subscription.name}</td>
            <td className="text-right">{subscription.cost}</td>
          </tr>
        );
      });  
    } else {
      var subscriptionNodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        );
      };
    }
    
    return (
      <tbody className="subscriptionList">
        {subscriptionNodes}
      </tbody>
    );
  }
});

module.exports = Subscriptions;