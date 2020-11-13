// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import DynamicControl from './DynamicControl';

export default function DynamicRow(props) {
  const { keyConfig, config } = props;

  return (
    <div className="dynamic-row">
      {_.map(keyConfig, (key) => (
        <DynamicControl
          keyConfig={key}
          config={config[key]}
        />
      ))}
    </div>
  );
}

DynamicRow.propTypes = {
  keyConfig: PropTypes.string,
  config: PropTypes.object,
};
