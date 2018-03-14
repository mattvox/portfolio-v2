import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';

const Mission = ({ data }) => {
  const {
    heading,
    content: { markdown: { html } },
  } = data;

  return (
    <Section>
      <h1>{heading}</h1>
      <Markdown html={html} />
    </Section>
  );
};

export default Mission;

Mission.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.object,
  }).isRequired,
};

export const MissionQuery = graphql`
  fragment mission on RootQueryType {
    mission: contentfulSection(id: {eq: "c3Nr66TAo2cSacmswWMYoK2"}) {
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
