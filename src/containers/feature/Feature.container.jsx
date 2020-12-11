import React from 'react';
import {Feature} from '../../components';

export default function FeatureContainer({children}) {
  return (
    <Feature>
      <Feature.HeadingsWrap>
      <Feature.Title>penpals.</Feature.Title>
      <Feature.Subtitle>discover, write, and grow</Feature.Subtitle>
      </Feature.HeadingsWrap>
      {children}
    </Feature>
  );
};
