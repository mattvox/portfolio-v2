import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './ProjectCard.styled';

const ProjectCard = ({ title, html, imageUrl }) => (
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

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  html: PropTypes.string,
};

ProjectCard.defaultProps = {
  imageUrl: 'lksjdflk',
};
