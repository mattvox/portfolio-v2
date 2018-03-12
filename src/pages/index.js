import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Landing from '../page-sections/home/Landing';
import Mission from '../page-sections/home/Mission';
import Skills from '../page-sections/home/Skills';

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Landing data={data.landing} />
      <Mission data={data.mission} />
      <Skills data={data.skills} />

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
  }
`;
