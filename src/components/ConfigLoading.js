import React from 'react';
import PropTypes from 'prop-types';

const ConfigLoading = (props) => {
  return(
    <div className="configLoading">
      <h3>{props.message}</h3>
    </div>
  );
};

ConfigLoading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ConfigLoading;
