import React from 'react';
import {shallow} from 'enzyme';
import {MovieContainer} from './Movie';
import MoviePage from '../components/Movie/MoviePage';

describe('<Search />', () => {
  it('should contain <MoviePage />', () => {
    const props = {
      match: {params: {id: 1}},
      actions: {addFavourite: () => {}, getMovie: ()=> {}},
      movie: {},
      imgURL: "",
      castURL: "",
      favouriteIds: {},
    };

    const wrapper = shallow(<MovieContainer {...props}/>);

    expect(wrapper.find(MoviePage).length).toEqual(1);
  });
});
