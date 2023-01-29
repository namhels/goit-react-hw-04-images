import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalStyled = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 80%;
  max-height: 95%;
  display: flex;
  justify-content: center;

  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
`;

const Img = styled.img`
  object-fit: cover;
`;

export { Overlay, ModalStyled, Img };
