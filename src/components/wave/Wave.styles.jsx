import styled from 'styled-components/macro';

export const ImageBlock = styled.div`
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  img {
    position: absolute;
    bottom: -2px;
    width: 100%;
    transform: translateX(0);
    animation: ebbAndFlow 10s infinite ease-in-out;
    transition: all 3s ease;

    /* @keyframes ebbAndFlow {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-10%);
      }
      100% {
        transform: translateX(0);
      }
    } */
  }
`;
