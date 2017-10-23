import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function movieReducer(state = initialState.favourites, action) {
  let newState;

  switch (action.type) {
    case types.ADD_FAVOURITE:
      newState = objectAssign({}, {
        list: [...state.list, action.favourite],
        ids: {...state.ids, [action.favourite.id]: true}
      });
      return newState;

    default:
      return state;
  }
}
