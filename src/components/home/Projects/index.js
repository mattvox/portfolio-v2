import React from 'react';
import PropTypes from 'prop-types';

const renderProjects = projects => (
  projects.map(project => (
    <div key={project.title}>
      <h4>{project.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: project.description.markdown.html,
        }}
      />
    </div>
  ))
);

const Projects = ({ data }) => {
  const {
    heading,
    projects,
  } = data;

  return (
    <div>
      <h1>{heading}</h1>
      {renderProjects(projects)}
    </div>
  );
};

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    projects: PropTypes.array,
  }).isRequired,
};

export const ProjectsQuery = graphql`
  fragment projects on RootQueryType {
    projects: contentfulProjectsSection(id:{eq:"c6ooIwnUIHS0Ec4IWA86Yak"}) {
      title
      heading
      projects {
        title
        tags
        description {
          markdown: childMarkdownRemark {
            html
          }
        }
        github
        link
      }
    }
  }
`;
