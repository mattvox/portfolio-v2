import React from 'react';
import PropTypes from 'prop-types';

const Markdown = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

Markdown.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Markdown;
