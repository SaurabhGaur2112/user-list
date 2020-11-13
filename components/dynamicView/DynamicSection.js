// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import DynamicRow from './DynamicRow';
import DynamicControl from './DynamicControl';

export default function DynamicSection(props) {
  const { keyConfig, config } = props;

  if (_.isEqual(typeof config, 'object')) {
    return (
      <div className="dynamic-section">
        <DynamicRow
          keyConfig={_.keys(config)}
          config={config}
        />
      </div>
    );
  }

  return (
    <div className="dynamic-section">
      <DynamicControl
        keyConfig={keyConfig}
        config={config}
      />
    </div>
  );
}

DynamicSection.propTypes = {
  keyConfig: PropTypes.string,
  config: PropTypes.object,
};
