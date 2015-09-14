import React, { PropTypes, Component } from 'react'

class Subscriptions extends Component {
  render () {
    let subscriptionType = 'Type'
    let serviceName = 'Service name'
    let cost = 'Cost'
    let total = 'Total'

    return (
      <div>
        <h2>Subscriptions</h2>
        <table className="subscriptionsTable">
          <thead>
            <tr className="rowSubscription">
              <th className="cellSubType">{subscriptionType}</th>
              <th className="cellSubName">{serviceName}</th>
              <th className="costColumn">{cost}</th>
            </tr>
          </thead>
          <SubscriptionList data={this.props.data.subscriptions} />
          <tbody>
            <tr>
              <td className="totalCaption" colSpan="2">{total}</td>
              <td className="totalValue">{this.props.data.total}</td>
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
          <tr className="rowSubscription">
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