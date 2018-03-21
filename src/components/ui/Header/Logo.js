import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  position: relative;
  background: lightblue;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const LogoText = styled.h1`
  margin: 0 auto;
`;

const Logo = () => (
  <LogoWrapper>
    <LogoText>M</LogoText>
  </LogoWrapper>
);

export default Logo;
