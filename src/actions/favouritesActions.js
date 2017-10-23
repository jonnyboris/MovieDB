import * as types from '../constants/actionTypes';

export function addFavourite(id, title) {
  return {
    type: types.ADD_FAVOURITE,
    favourite: {id, title}
  };
}
