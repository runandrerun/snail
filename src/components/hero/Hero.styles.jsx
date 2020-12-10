import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Headline = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;

  color: white;
  font-size: 5rem;
  animation: fadeIn 3s ease-out;
  transition: all 3s ease;

  @media (max-width: 1000px) {
    font-size: 3rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, 100%);
    }
    80% {
      transform: translate(-50%, -40%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -40%);
    }
  }

`;
