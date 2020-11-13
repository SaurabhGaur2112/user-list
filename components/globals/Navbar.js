// vendor modules
import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const { title } = props;

  return (
    <div className="navbar">
      <span
        className="navbar-title"
        onClick={() => { console.log("button clicked");}}
      >
        {title}
      </span>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
