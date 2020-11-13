// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import DynamicSection from './DynamicSection';

export default function DynamicView(props) {
  const { configuration } = props;

  const result = _.map(configuration, (config) => (
    Array.isArray(config[_.keys(config)[0]])
      ? (
        <div className="dynamic-view">
          <div className="dynamic-view__title">{_.keys(config)[0]}</div>
          {_.map(config[_.keys(config)[0]], (con) => (
            <DynamicSection
              keyConfig={_.keys(con)}
              config={con}
            />
          ))}
        </div>
      ) : (
        <div className="dynamic-view">
          {_.map(config, (con) => (
            <DynamicSection
              keyConfig={_.keys(config)}
              config={con}
            />
          ))}
        </div>
      )
  ));

  return result;
}

DynamicView.propTypes = {
  configuration: PropTypes.object,
};
