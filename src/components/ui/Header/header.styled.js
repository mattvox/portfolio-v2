import Link from 'gatsby-link';
import styled from 'styled-components';

export const HeaderWrapper = styled.section`
  position: absolute;
  width: 100%;
`;

export const LogoWrapper = styled(Link)`
  width: 90px;
  height: 90px;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  position: relative;
  background: lightblue;
  color: white;
  text-decoration: none;
`;

export const Logo = styled.h1`
  margin: 0 auto;
`;
