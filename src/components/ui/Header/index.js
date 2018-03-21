import React from 'react';
import { HeaderWrapper, LogoWrapper, Logo } from './header.styled';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo>M</Logo>
    </LogoWrapper>
  </HeaderWrapper>
);

export default Header;
