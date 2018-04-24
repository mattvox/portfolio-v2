import React from 'react';

import Logo from '../Logo';

describe('Logo', () => {
  it('should render correctly', () => {
    const output = shallow(<Logo />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
