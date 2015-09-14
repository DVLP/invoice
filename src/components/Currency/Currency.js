import React, { PropTypes, Component } from 'react';

class Currency extends Component {
  render() {
    let currency = '';
    let value = this.props.value;
    value = value.toFixed(2).toString();
    if(this.props.currency && this.props.currency === 'GBP') {
      currency = '£';
    }
    const { to, children, ...props } = this.props;
    return <span {...props}>{currency}{value}</span>;
  }
}

export default Currency;
