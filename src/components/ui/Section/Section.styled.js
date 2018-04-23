import styled from 'styled-components';

export const SectionWrapper = styled.div`
  margin: 0;
  padding: 20px 0;
  width: 100%;
  ${props => (
    props.theme === 'superman'
      && `
        background: blue;
        color: red;
      `
  )};
  background-color: ${props => (props.dark && 'black') || (props.light && 'white')};
  color: ${props => props.fg};
`;

export const ContentWrapper = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem 1rem;
`;
