import React, { PropTypes, Component } from 'react'

class StoreOrders extends Component {
  render() {
    return (
    <div>
      <h3>Sky store</h3>
      <table>
        <thead>
          <tr>
            <td colSpan="2"><h4>Rentals</h4></td>
          </tr>
          <tr>
              <td>Title</td>
              <td>Cost</td>
          </tr>
        </thead>
        <ItemList data={this.props.data.rentals} />
      </table>
      <table>
        <thead>
          <tr>
            <td colSpan="2"><h4>Buy And Keep</h4></td>
          </tr>
          <tr>
            <td>Title</td>
            <td>Cost</td>
          </tr>
        </thead>
        <ItemList data={this.props.data.buyAndKeep} />
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{this.props.data.total}</td>
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
            <td className="text-right">{item.cost}</td>
          </tr>
        )
      })
    } else {
      var nodes = function () {
        return (
          <tr>
            <td>No data</td>
          </tr>
        )
      }
    }
    
    return (
      <tbody className="ItemList">
        {nodes}
      </tbody>
    )
  }
}

module.exports = StoreOrders;