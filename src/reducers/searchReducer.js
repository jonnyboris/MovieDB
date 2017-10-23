import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_QUERY:
      newState = objectAssign({}, state, {
        query: action.query,
        loading: action.loading,
        message: action.message,
        results: []
      });
      return  newState;

    case types.UPDATE_SEARCH_RESULTS:
      newState = objectAssign({}, state, {
        results: action.results,
        page: action.page,
        message: action.message,
        loading: false
      });
      return newState;

    default:
      return state;
  }
}
