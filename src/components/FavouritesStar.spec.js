import React from 'react';
import { shallow } from 'enzyme';
import FavouritesStar from './FavouritesStar';


describe('Config Loading', () => {
  it('binds add favourite when current id is not already in favourites', () => {
    const props = {
      favouriteIds: {1: true},
      id: 0,
      addFav: ()=>{},
    };
    const wrapper = shallow(<FavouritesStar {...props} />);
    const icon = wrapper.find("i").first();

    expect(icon.prop('onClick')).toBeDefined();
  });

  it('add favourite not bound when movie is already a favourite', () => {
    const props = {
      favouriteIds: {1: true},
      id: 1,
      addFav: ()=>{},
    };
    const wrapper = shallow(<FavouritesStar {...props} />);
    const icon = wrapper.find("i").first();

    expect(icon.prop('onClick')).toBeUndefined();
  });
});
