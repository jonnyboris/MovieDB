import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function movieReducer(state = initialState.movie, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_MOVIE:
      newState = objectAssign({}, state, action.movie);
      return newState;

    case types.RESET_MOVIE:
      newState = objectAssign({}, initialState.movie);
      return newState;

    default:
      return state;
  }
}
