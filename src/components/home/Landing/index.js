import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';

const Landing = ({ data }) => {
  const {
    heading,
    content: { markdown: { html } },
  } = data;

  return (
    <Section
      style={{
        height: 'calc(100vh - 121px)',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>{heading}</h1>
      <Markdown html={html} />
    </Section>
  );
};

export default Landing;

Landing.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.object,
  }).isRequired,
};

export const LandingQuery = graphql`
  fragment landing on RootQueryType {
    landing: contentfulSection(id: {eq: "c4m8VSKqGtWSSssQ0YQYEqA"}) {
      id
      title
      heading
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
    }
  }
`;
