import React from 'react';
import PropTypes from 'prop-types';

const Landing = ({ data }) => {
  const {
    heading,
    content: { markdown: { html } },
  } = data;

  return (
    <div>
      <h1>{heading}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
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
