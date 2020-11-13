// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// css modules
import '../static/scss/main.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  };

  state = {};

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Layout;
