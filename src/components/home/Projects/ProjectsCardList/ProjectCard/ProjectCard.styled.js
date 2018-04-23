import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: white;
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
