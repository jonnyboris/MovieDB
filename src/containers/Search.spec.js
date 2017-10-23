import React from 'react';
import {shallow} from 'enzyme';
import {SearchContainer} from './Search';
import SearchPage from '../components/Search/SearchPage';

describe('<Search />', () => {
  it('should contain <SearchPage />', () => {
    const props = {
      actions: {addFavourite: () => {}},
      search: {results: [], query: "", loading: true, message: ""},
      imgURL: "",
      favouriteIds: {},
    };

    const wrapper = shallow(<SearchContainer {...props}/>);

    expect(wrapper.find(SearchPage).length).toEqual(1);
  });
});
