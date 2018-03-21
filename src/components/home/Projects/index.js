import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';

const renderProjects = projects => (
  projects.map(project => (
    <Card
      key={project.title}
      title={project.title}
      imageUrl={project.thumbnail.file.url}
      html={project.description.markdown.html}
    />
  ))
);

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: -1em 0 0 -1em;
`;

const CardWrapper = styled.div`
  border: 1px solid black;
  margin: 1em 0 0 1em;
  height: 250px;
  flex: 1 0 calc(100% - 1em);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex: 1 0 calc(50% - 1em);
  }

  @media screen and (min-width: 960px) {
    flex: 1 0 calc(33.3% - 1em);
  }
`;

const Card = ({ title, html, imageUrl }) => (
  <CardWrapper>
    {/* <h4>{title}</h4> */}
    <img
      style={{
        maxHeight: '80%',
        maxWidth: '80%',
        margin: 0,
      }}
      src={`https:${imageUrl}`}
      alt=""
    />
    {/* <Markdown html={html} /> */}
  </CardWrapper>
);

const Projects = ({ data }) => {
  const {
    heading,
    projects,
  } = data;

  return (
    <Section>
      <h1>{heading}</h1>
      <CardsContainer>
        {renderProjects(projects)}
      </CardsContainer>
    </Section>
  );
};

export default Projects;

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  html: PropTypes.string,
};

Card.defaultProps = {
  imageUrl: 'lksjdflk',
};

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
