import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/ui/Header';
import Contact from '../components/ui/Contact';
import Footer from '../components/ui/Footer';

import './index.css';

const TemplateWrapper = ({ children, data }) => (
  <div id="app-root">
    <Helmet
      title="Matthew Bliffert | Full Stack Developer, Crafter of Digital Things"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
    <Contact data={data.contact} />
    <Footer />
  </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    contact: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query LayoutQuery {
    ...contact
  }
`;
