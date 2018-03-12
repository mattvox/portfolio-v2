import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ data }) => {
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

export default Projects;

// Projects.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     heading: PropTypes.string,
//     content: PropTypes.object,
//   }).isRequired,
// };

// export const ProjectsQuery = graphql`
//   fragment landing on RootQueryType {
//     projects: contentfulSection(id: {eq: "c4m8VSKqGtWSSssQ0YQYEqA"}) {
//       id
//       title
//       heading
//       content {
//         markdown: childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
