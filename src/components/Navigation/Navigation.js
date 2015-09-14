/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/invoice" onClick={Link.handleClick}>Invoice</a>
        <span className="Navigation-spacer"> | </span>
        <a className="Navigation-link" href="/invoicees6" onClick={Link.handleClick}>Invoice ES6</a>
      </div>
    );
  }

}

export default Navigation;
