import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';
import { CardsContainer } from './ProjectsCardList.styled';

const ProjectsCardList = ({ projects }) => {
  const renderProjects = () => (
    projects.map(project => (
      <ProjectCard
        key={project.title}
        title={project.title}
        imageUrl={project.thumbnail.file.url}
        html={project.description.markdown.html}
      />
    ))
  );

  return (
    <CardsContainer>
      {renderProjects(projects)}
    </CardsContainer>
  );
};

export default ProjectsCardList;

ProjectsCardList.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.object,
    html: PropTypes.object,
  }),
};

ProjectsCardList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.object,
    html: PropTypes.object,
  })),
};

ProjectsCardList.defaultProps = {
  projects: null,
};
