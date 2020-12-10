import React from 'react';
import {HeaderContainer, HeroContainer, OptFormContainer} from '../../containers';
import {Wave, Feature} from '../../components';
import {Section, InnerWrap} from './Home.styles';

export default function Home() {
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer>
          <Feature>
          <Feature.Title>Unlimited films, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptFormContainer />
          </Feature>
        </HeaderContainer>
        <HeroContainer />
        <Wave />
      </InnerWrap>
    </Section>
  );
};
