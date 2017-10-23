import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import * as actions from '../actions/searchActions';
import {addFavourite} from '../actions/favouritesActions';
import Search from '../components/Search/SearchPage';

export class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.doQuery = this.doQuery.bind(this);
    this.doSearch = _.debounce(this.doSearch, 400, {leading: false});
  }

  doQuery(query) {
    this.props.actions.updateQuery(query);
    this.doSearch();
  }

  doSearch() {
    this.props.actions.searchMovies();
  }

  render() {
    const {results, query, loading, message} = this.props.search;
    return (
      <Search
        results={results}
        query={query}
        loading={loading}
        message={message}
        imgUrl={this.props.imgURL}
        favouriteIds={this.props.favouriteIds}
        doQuery={this.doQuery}
        addFav={this.props.actions.addFavourite}
      />
    );
  }
}

SearchContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  imgURL: PropTypes.string.isRequired,
  favouriteIds: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const imgURL = state.config.images.secure_base_url + (state.config.images.poster_sizes[0] || 'w92'); //Refactor

  return {
    search: state.search,
    favouriteIds: state.favourites.ids,
    imgURL,
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
)(SearchContainer);
