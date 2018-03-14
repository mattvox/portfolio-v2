import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin: 0;
  padding: 20px 0;
  width: 100%;
  ${props => (
    props.theme === 'superman'
      && `
        background: blue;
        color: red;
      `
  )};
  background-color: ${props => (props.dark && 'black') || (props.light && 'white')};
  color: ${props => props.fg};
`;

const ContentWrapper = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;
`;

const Section = ({ children, theme, ...props }) => {
  console.log({ ...props });

  return (
    <SectionWrapper theme={theme} {...props}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </SectionWrapper>
  );
};

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
