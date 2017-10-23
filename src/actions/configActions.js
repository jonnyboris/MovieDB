import * as types from '../constants/actionTypes';
import Api from '../api/';

export function getConfig() {
  return function (dispatch) {
    Api.getConfig()
      .then(data => {
        dispatch(updateConfig(data));
        dispatch(getGenres());
      })
      .catch(e => dispatch(updateConfig({message: `Failed to load genres, please try refreshing the page (${e.message}`})));
  };
}

export function getGenres() {
  return function (dispatch) {
    Api.getGenres()
      .then(data => {
        const genres = data.genres.reduce((acc, genre) => ({...acc, [genre.id]: genre.name}), {});
        const config = {genres, configured: true};
        dispatch(updateConfig(config));
      })
      .catch(e => dispatch(updateConfig({message: `Failed to load genres, please try refreshing the page (${e.message})`})));
  };
}

export function updateConfig(config) {
  return {
    type: types.UPDATE_CONFIG,
    config
  };
}
