import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/movieActions';
import Movie from '../components/Movie/MoviePage';
import {addFavourite} from '../actions/favouritesActions';

export class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.getMovie(id);
  }

  componentWillReceiveProps(nextProps) {
    const {id} = nextProps.match.params;
    if(id !== this.state.id) {
      this.props.actions.resetMovie();
      this.getMovie(id);
    }
  }

  componentWillUnmount() {
    this.props.actions.resetMovie();
  }

  getMovie(id) {
    this.props.actions.getMovie(id);
    this.setState({id});
  }

  render() {
    return (
      <Movie
        movie={this.props.movie}
        baseUrl={this.props.imgURL}
        castUrl={this.props.castURL}
        addFav={this.props.actions.addFavourite}
        favouriteIds={this.props.favouriteIds}
      />
    );
  }
}

MovieContainer.propTypes = {
  match: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  imgURL: PropTypes.string.isRequired,
  castURL: PropTypes.string.isRequired,
  favouriteIds: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const imgURL = state.config.images.secure_base_url + (state.config.images.poster_sizes[4] || 'w500'); //Refactor
  const castURL = state.config.images.secure_base_url + (state.config.images.poster_sizes[0] || 'w45'); //Refactor
  return {
    movie: state.movie,
    imgURL,
    castURL,
    favouriteIds: state.favourites.ids,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions, addFavourite}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
