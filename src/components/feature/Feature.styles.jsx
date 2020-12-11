import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* border-bottom: .5rem solid #222; */

  padding: 165px 45px;

  @media (max-width: 600px) {
    padding: 150px 30px;
  }
`;

export const HeadingsWrap = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 5rem;
  font-weight: 600;
  /* margin: auto; */
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto', serif;
  color: white;
  max-width: 640px;
  font-size: 3.5rem;
  font-weight: 500;
  /* margin: 1rem auto; */
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;
