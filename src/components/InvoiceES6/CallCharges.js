import React, { PropTypes, Component } from 'react'

class CallCharges extends Component {
  render() {
    return (
      <div>
        <h3>Call charges</h3>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Duration</th>
              <th>Cost</th>
            </tr>
          </thead>
          <CallsList data={this.props.data.calls} />
          <tfoot>
            <tr>
              <td></td>
              <th>Total</th>
              <td>{this.props.data.total}</td>
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
          <tr>
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