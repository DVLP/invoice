import React, { PropTypes, Component } from 'react'
import Currency from '../Currency'

class StoreOrders extends Component {
  render() {
    let skyStore = 'Sky store'
    let rentals = 'Rentals'
    let title = 'Title'
    let total = 'Total'
    let cost = 'Cost'
    let buyAndKeep = 'Buy And Keep'
    let nodata = 'No data'
    return (
    <div>
      <h3>{skyStore}</h3>
      <table className="storeOrdersTable">
        <thead>
          <tr>
            <td colSpan="2"><h4>{rentals}</h4></td>
          </tr>
          <tr>
              <th>{title}</th>
              <th className="costColumn">{cost}</th>
          </tr>
        </thead>
        <ItemList data={this.props.data.rentals} />
      </table>
      <table className="storeOrdersTable">
        <thead>
          <tr>
            <td colSpan="2"><h4>{buyAndKeep}</h4></td>
          </tr>
          <tr>
            <th>{title}</th>
            <th className="costColumn">{cost}</th>
          </tr>
        </thead>
        <ItemList data={this.props.data.buyAndKeep} />
        <tfoot>
          <tr>
            <td className="totalCaption">{total}</td>
            <td className="totalValue"><Currency currency="GBP" value={this.props.data.total} /></td>
          </tr>
        </tfoot>
      </table>
    </div>
    )
  }
}

class ItemList extends Component {
  render() {
    if(this.props.data) {
      var nodes = this.props.data.map(item => {
        return (
          <tr>
            <td>{item.title}</td>
            <td><Currency value={item.cost} /></td>
          </tr>
        )
      })
    } else {
      var nodes = function () {
        return (
          <tr>
            <td>{nodata}</td>
          </tr>
        )
      }
    }
    
    return (
      <tbody>
        {nodes}
      </tbody>
    )
  }
}

module.exports = StoreOrders;