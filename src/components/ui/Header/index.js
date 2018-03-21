import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const HeaderWrapper = styled.section`
  position: absolute;
  width: 100%;
`;

const Header = () => (
  <HeaderWrapper>
    <Nav />
  </HeaderWrapper>
);

export default Header;
