// Set up your root reducer here...
import {combineReducers} from 'redux';
import search from './searchReducer';
import config from './configReducer';
import movie from './movieReducer';
import favourites from './favouritesReducer';

const rootReducer = combineReducers({
  search,
  config,
  movie,
  favourites,
});

export default rootReducer;
