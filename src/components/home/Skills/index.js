import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../ui/Section';
import Markdown from '../../ui/Markdown';

const renderSkills = skills => (
  skills.map(skill => (
    <div key={skill.title}>
      <h4>{skill.heading}</h4>
      <Markdown html={skill.content.markdown.html} />
    </div>
  ))
);

const Skills = ({ data }) => {
  const {
    heading,
    content: { markdown: { html } },
    skills,
  } = data;

  return (
    <Section>
      <h1>{heading}</h1>
      <Markdown html={html} />
      {renderSkills(skills)}
    </Section>
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
