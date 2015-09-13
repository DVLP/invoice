import React, { PropTypes, Component } from 'react'

class Subscriptions extends Component {
  render () {
    let subscriptionType = 'Type'
    let serviceName = 'Service name'
    let cost = 'Cost'
    let total = 'Total'

    return (
      <div>
        <h3>Subscriptions</h3>
        <table>
          <thead>
            <tr>
              <td>{subscriptionType}</td>
              <td>{serviceName}</td>
              <td>{cost}</td>
            </tr>
          </thead>
          <SubscriptionList data={this.props.data.subscriptions} />
          <tbody>
            <tr>
              <td colSpan="2">{total}</td>
              <td>{this.props.data.total}</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }
}

class SubscriptionList extends Component {
  render() {
    if(this.props.data) {
      var subscriptionNodes = this.props.data.map(subscription => {
        return (
          <tr>
            <td>{subscription.type}</td>
            <td>{subscription.name}</td>
            <td>{subscription.cost}</td>
          </tr>
        )
      })  
    } else {
      var subscriptionNodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        )
      }
    }
    
    return (
      <tbody className="subscriptionList">
        {subscriptionNodes}
      </tbody>
    )
  }
}

module.exports = Subscriptions