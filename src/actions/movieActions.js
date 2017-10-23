import * as types from '../constants/actionTypes';
import Api from '../api/';
import _ from 'lodash';

export function getMovie(id) {
  return function (dispatch) {
    Api.getMovie(id)
      .then(data => {
        dispatch(updateMovie({details: data}));
        dispatch(getCast(id));
      })
      .catch(e => dispatch(updateMovie({message: `Failed to load movie, please try refreshing the page (${e.message})`})));
  };
}

export function getCast(id) {
  return function (dispatch) {
    Api.getCast(id)
      .then(data => {
        //apparently movies can only have 1 director, the API only ever seems to return 1 (even for the Coen Brothers)
        //https://www.quora.com/Approximately-what-percent-of-films-have-more-than-one-director
        const director = _.find(data.crew, member => member.job.toLowerCase() === 'director');
        dispatch(updateMovie({cast: {...data, director}, loading: false}));
      })
      .catch(e => dispatch(updateMovie({message: `Failed to load cast, please try refreshing the page (${e.message})`})));
  };
}

export function updateMovie(movie) {
  return {
    type: types.UPDATE_MOVIE,
    movie
  };
}

export function resetMovie() {
  return {
    type: types.RESET_MOVIE,
  };
}
