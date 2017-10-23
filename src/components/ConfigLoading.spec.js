import React from 'react';
import { shallow } from 'enzyme';
import ConfigLoading from './ConfigLoading';


describe('Config Loading', () => {
  it('renders the message', () => {
    const props = {
      message: 'testMessage',
    };
    const wrapper = shallow(<ConfigLoading {...props} />);
    const titles = wrapper.find("h3");
    const title =  titles.first();

    expect(titles.length).toEqual(1);
    expect(title.text()).toEqual(props.message);
  });
});
