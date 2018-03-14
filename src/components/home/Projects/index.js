import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';

const renderProjects = projects => (
  projects.map(project => (
    <div key={project.title}>
      <h4>{project.title}</h4>
      <Markdown html={project.description.markdown.html} />
    </div>
  ))
);

const Projects = ({ data }) => {
  const {
    heading,
    projects,
  } = data;

  return (
    <Section>
      <h1>{heading}</h1>
      {renderProjects(projects)}
    </Section>
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
