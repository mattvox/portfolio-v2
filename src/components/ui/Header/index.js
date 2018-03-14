import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      margin: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
            border: '7px solid black',
            padding: '10px',
          }}
        >
          mb
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
