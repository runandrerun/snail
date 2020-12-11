import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
`;

export const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  color: #4F7C8C;
`;

export const Body = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  color: darken(#cfcfc4, 50%);
`;
