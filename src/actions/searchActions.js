import * as types from '../constants/actionTypes';
import Api from '../api/';


export function searchMovies() {
  return function (dispatch, getState) {
    const query = getState().search.query;

    if(query.length === 0) {
      return;
    }

    Api.searchMovies(query)
      .then(data => {
        let message = '';
        if(data.results.length === 0) {
          message = 'No movies found';
        }
        dispatch(updateSearchResults(data.results, data.page, message));
      })
      .catch(e => dispatch(updateSearchResults([], 1, e.message || "Something went wrong")));
  };
}

export function updateSearchResults(results, page, message = '') {
  return {
    type: types.UPDATE_SEARCH_RESULTS,
    results,
    page,
    message
  };
}

export function updateQuery(query) {
  const len = query.length;
  let loading = true;
  let message = 'Loading';

  if(len === 0 ) {
    message = 'Search for a movie above';
    loading = false;
  }

  return {
    type: types.UPDATE_QUERY,
    query,
    loading,
    message
  };
}
