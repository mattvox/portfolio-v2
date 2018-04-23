import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrapper, ContentWrapper } from './Section.styled';

const Section = ({ children, theme, ...props }) => (
  <SectionWrapper theme={theme} {...props}>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </SectionWrapper>
);

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  fg: PropTypes.string,
  theme: PropTypes.string,
};

Section.defaultProps = {
  bg: null,
  fg: null,
  theme: null,
};
