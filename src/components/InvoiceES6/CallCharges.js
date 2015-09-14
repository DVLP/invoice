import React, { PropTypes, Component } from 'react'

class CallCharges extends Component {
  render() {
    return (
      <div>
        <h3>Call charges</h3>
        <table className="callChargesTable">
          <thead>
            <tr>
              <th className="cellCallNumber">Number</th>
              <th className="cellCallDuration">Duration</th>
              <th className="costColumn">Cost</th>
            </tr>
          </thead>
          <CallsList data={this.props.data.calls} />
          <tfoot>
            <tr>
              <td className="totalCaption" colSpan="2">Total</td>
              <td className="totalValue">{this.props.data.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

class CallsList extends Component {
  render() {
    if(this.props.data) {
      var callNodes = this.props.data.map(call => {
        return (
          <tr className="rowCall">
            <td>{call.called}</td>
            <td>{call.duration}</td>
            <td>{call.cost}</td>
          </tr>
        )
      })
    } else {
      var callNodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        )
      }
    }

    return (
      <tbody>
        {callNodes}
      </tbody>
    )
  }
}

module.exports = CallCharges