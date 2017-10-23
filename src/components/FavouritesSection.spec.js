import React from 'react';
import { shallow } from 'enzyme';
import FavouritesSection from './FavouritesSection';


describe('Config Loading', () => {
  it('renders renders favourites', () => {
    const props = {
      favourites: [{id: 1}, {id: 2}, {id: 3}],
    };
    const wrapper = shallow(<FavouritesSection {...props} />);
    const titles = wrapper.find("li");

    expect(titles.length).toEqual(3);
  });
});
