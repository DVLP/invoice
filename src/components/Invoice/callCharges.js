var React = require('react/addons');

var CallCharges = React.createClass({
  render: function() {
    return (
    /* jshint ignore:start */
  	<div className="panel panel-default">
      <div className="panel-heading">
        <h3><strong>Call charges</strong></h3>
      </div>
      <div className="panel-body">
        <table className="table table-condensed">
          <thead>
            <tr>
              <th className="col-xs-3">Number</th>
              <th className="col-xs-8">Duration</th>
              <th className="col-xs-1 text-right">Cost</th>
            </tr>
          </thead>
          <CallsList data={this.props.data.calls} />
          <tbody>
            <tr>
              <td className="highrow"></td>
              <th className="highrow text-right">Total</th>
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

var CallsList = React.createClass({
  render: function() {
    if(this.props.data) {
      var callNodes = this.props.data.map(function (call) {
        return (
          <tr>
            <td>{call.called}</td>
            <td>{call.duration}</td>
            <td className="text-right">{call.cost}</td>
          </tr>
        );
      });  
    } else {
      var callNodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        );
      };
    }
    
    return (
      <tbody className="callsList">
        {callNodes}
      </tbody>
    );
  }
});

module.exports = CallCharges;