import React from 'react';
import {Container, Headline} from './Hero.styles';

export default function Hero({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Hero.Headline = function HeroHeadline({ children, ...restProps }) {
  return (
    <Headline {...restProps}>{children}</Headline>
  );
};
