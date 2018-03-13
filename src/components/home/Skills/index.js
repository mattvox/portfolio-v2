import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ data }) => {
  const {
    heading,
    content: { markdown: { html } },
    skills,
  } = data;

  const renderSkills = () => (
    skills.map(skill => (
      <div key={skill.title}>
        <h4>{skill.heading}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: skill.content.markdown.html,
          }}
        />
      </div>
    ))
  );

  return (
    <div>
      <h1>{heading}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      {renderSkills()}
    </div>
  );
};

export default Skills;

Skills.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.object,
    skills: PropTypes.array,
  }).isRequired,
};

export const SkillsQuery = graphql`
  fragment skills on RootQueryType {
    skills: contentfulSkillsSection(id:{eq:"c3F5Cr1I0vK0G6Myu4KWgAw"}) {
      title
      heading
      content {
        markdown: childMarkdownRemark {
          html
        }
      }
      skills {
        title
        heading
        content {
          markdown: childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
