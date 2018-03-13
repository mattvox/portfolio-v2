import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ data }) => {
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

export default Contact;

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.object,
  }).isRequired,
};

export const ContactQuery = graphql`
  fragment contact on RootQueryType {
    contact: contentfulSection(id: {eq: "c1dtge3P8u64i0cm6UIK6gG"}) {
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
