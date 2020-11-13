// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import Input from '@hawk-ui/input';

export default function DynamicInput(props) {
  const { label, value } = props;

  return (
    <Input
      label={label}
      value={value}
      isDisabled
    />
  );
}

DynamicInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
