// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import DynamicSection from './DynamicSection';
import DynamicInput from './Fields/DynamicInput';

export default function DynamicControl(props) {
  const { keyConfig, config } = props;

  if (_.isEqual(typeof config, 'object')) {
    return (
      <DynamicSection
        keyConfig={_.keys(config)}
        config={config}
      />
    );
  }

  if (!_.isEmpty(`${config}`)) {
    return (
      <div className="dynamic-control">
        <DynamicInput
          label={keyConfig}
          value={config}
        />
      </div>
    );
  }

  return null;
}

DynamicControl.propTypes = {
  keyConfig: PropTypes.string,
  config: PropTypes.object,
};
