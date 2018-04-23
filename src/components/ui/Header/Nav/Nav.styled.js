import styled from 'styled-components';

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255,0.98);
  overflow: hidden;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s;
`;

export const OverlayContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  height: 100%;
`;
