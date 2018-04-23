import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';
import ProjectsCardList from './ProjectsCardList';

const Projects = ({ data }) => {
  const {
    heading,
    projects,
  } = data;

  return (
    <Section style={{ background: '#eee' }}>
      <h1>{heading}</h1>
      <ProjectsCardList projects={projects} />
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
        thumbnail {
          file {
            url
          }
        }
        github
        link
      }
    }
  }
`;
