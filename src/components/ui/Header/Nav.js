import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Logo from './Logo';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255,0.9);
  overflow: hidden;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s;
`;

const OverlayContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 1em;
  text-decoration: none;
`;


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({ isVisible: !this.state.isVisible });
    }
  }

  toggleVisibility() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <span
          onClick={this.toggleVisibility}
          onKeyPress={this.handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <Logo />
        </span>

        <Overlay visible={isVisible}>
          <button onClick={this.toggleVisibility}>
            &times;
          </button>

          <OverlayContent>
            <div style={{ flex: '1 0 100%' }}>
              <NavLink to="/" onClick={this.toggleVisibility}>Home</NavLink>
              <NavLink to="/about" onClick={this.toggleVisibility}>About</NavLink>
              <NavLink to="/" onClick={this.toggleVisibility}>Resume</NavLink>
              <NavLink to="/" onClick={this.toggleVisibility}>Contact</NavLink>
            </div>
          </OverlayContent>
        </Overlay>
      </div>
    );
  }
}

export default Nav;
