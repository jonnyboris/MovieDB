import React from 'react';
import { shallow  } from 'enzyme';
import MoviePage from './MoviePage';


describe('SearchPage', () => {
  let props;
  let wrapper;


  it('contains details', () => {
    wrapper = shallow (<MoviePage {...props} />);
    const divs = wrapper.find("MovieDetails");
    expect(divs.length).toEqual(1);
  });

  it('renders the cast', () => {
    wrapper = shallow (<MoviePage {...props} />);
    const divs = wrapper.find("CastMember");
    expect(divs.length).toEqual(3);
  });

  beforeEach(() => {
    props = {
      baseUrl: "",
      castUrl: "",
      movie: {
        loading: false,
        details: {},
        cast: {
          cast: [{}, {}, {}]
        }
      },
      favouriteIds: {},
      addFav: ()=> {},
    };
    wrapper = undefined;
  });
});
