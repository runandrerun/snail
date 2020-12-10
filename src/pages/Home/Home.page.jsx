import React from 'react';
import {HeaderContainer, HeroContainer} from '../../containers';
import {Wave} from '../../components';
import {Section, InnerWrap} from './Home.styles';

export default function Home() {
  return (
    <Section id="home">
      <InnerWrap>
        <HeaderContainer />
        <HeroContainer />
        <Wave />
      </InnerWrap>
    </Section>
  );
};
