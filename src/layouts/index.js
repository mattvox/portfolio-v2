import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/ui/Header';
import Contact from '../components/ui/Contact';
import Footer from '../components/ui/Footer';

import './index.css';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
      <Contact data={data.contact} />
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    ...contact
  }
`;
