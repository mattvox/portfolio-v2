import React from 'react';

import Logo from '../Logo';
import NavMenu from '../NavMenu';
import { Overlay, OverlayContent } from './Nav.styled';

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
          <span
            onClick={this.toggleVisibility}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer', fontSize: '2rem', marginLeft: '20px' }}
          >
            &times;
          </span>

          <OverlayContent onClick={this.toggleVisibility}>
            <NavMenu />
          </OverlayContent>
        </Overlay>
      </div>
    );
  }
}

export default Nav;
