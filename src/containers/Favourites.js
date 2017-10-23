import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavouritesSection from '../components/FavouritesSection';

class FavouritesContainer extends React.Component {
  render() {
    return (<FavouritesSection favourites={this.props.favourites}/>);
  }
}

FavouritesContainer.propTypes = {
  favourites: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    favourites: state.favourites.list
  };
}

export default connect(
  mapStateToProps,
)(FavouritesContainer);
