import React from 'react';

import NavMenu from '../NavMenu';

describe('NavMenu', () => {
  it('should render correctly', () => {
    const output = shallow(<NavMenu />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
