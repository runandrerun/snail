import React from 'react';
import {HeaderContainer, HeroContainer, FeatureContainer, OptFormContainer, JumbotronContainer} from '../../containers';
import {Wave, Feature} from '../../components';
import {Section, InnerWrap} from './Home.styles';

export default function Home() {
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer/>
        <FeatureContainer>
          <OptFormContainer />
        </FeatureContainer>
        <Wave />
      </InnerWrap>
      <JumbotronContainer />
    </Section>
  );
};
