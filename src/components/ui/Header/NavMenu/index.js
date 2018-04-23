import React from 'react';

import { MenuWrapper, NavLink } from './NavMenu.styled';

const NavMenu = () => (
  <MenuWrapper>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/">Resume</NavLink>
    <NavLink to="/">Contact</NavLink>
  </MenuWrapper>
);

export default NavMenu;
