import React from 'react';
import {Container, Header, Body} from './Jumbotron.styles';

export default function Jumbotron({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Jumbotron.Header = function JumbotronHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

Jumbotron.Body = function JumbotronBody({ children, ...restProps }) {
  return (
    <Body {...restProps}>{children}</Body>
  );
};
