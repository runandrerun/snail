import styled from 'styled-components/macro';

export const ImageBlock = styled.img`
  position: absolute;
  bottom: 20px;
  width: 150%;
  transform: translateX(0);
  animation: ebbAndFlow 15s infinite ease-in-out;
  transition: all 3s ease;

  @media (max-width: 1000px) {
    bottom: 40px;
  }

  @keyframes ebbAndFlow {
    0% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(-30%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
