import React from 'react';
import PropTypes from 'prop-types';

const ResultImage = (props) => {
  return(
    <img src={`${props.baseUrl}${props.path}`} alt={`${props.title} movie poster`} title={`${props.title} movie poster`} />
  );
};

ResultImage.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ResultImage;
