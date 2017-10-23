import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function configReducer(state = initialState.config, action) {
  let newState;

  switch (action.type) {
    case types.UPDATE_CONFIG:
      newState = objectAssign({}, state, action.config);
      return  newState;
    default:
      return state;
  }
}
