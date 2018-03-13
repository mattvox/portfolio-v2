import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Landing from '../components/home/Landing';
import Mission from '../components/home/Mission';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';

const IndexPage = ({ data }) => {
  console.log(data);

  const {
    landing,
    mission,
    skills,
    projects,
  } = data;

  return (
    <div>
      <Landing data={landing} />
      <Mission data={mission} />
      <Skills data={skills} />
      <Projects data={projects} />

      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    landing: PropTypes.object,
    mission: PropTypes.object,
    contact: PropTypes.object,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    ...landing
    ...mission
    ...skills
    ...projects
  }
`;
