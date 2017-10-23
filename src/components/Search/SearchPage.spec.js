import React from 'react';
import { shallow  } from 'enzyme';
import SearchPage from './SearchPage';


describe('SearchPage', () => {
  let props;
  let wrapper;

  it('renders', () => {
    wrapper = shallow (<SearchPage {...props} />);
    const divs = wrapper.find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it('changes on input', () => {
    wrapper = shallow (<SearchPage {...props} />);
    const input = wrapper.find("input").first();
    expect(props.doQuery).not.toBeCalled();
    input.simulate('change', {target: {value: "test1"}});
    expect(props.doQuery).toBeCalledWith("test1");
  });

  it('contains results', () => {
    wrapper = shallow (<SearchPage {...props} />);
    const divs = wrapper.find("Result");
    expect(divs.length).toEqual(4);
  });

  beforeEach(() => {
    props = {
      results: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
      query: "test",
      message: "",
      imgUrl: "",
      loading: false,
      doQuery: jest.fn(),
      addFav: jest.fn(),
      favouriteIds: {},
    };
    wrapper = undefined;
  });
});
