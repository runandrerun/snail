import React from 'react';
import {Container, LogoWrap, Logo, LogoText, Anchor, ButtonsContainer, ButtonLink} from './Header.styles';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return (
    <LogoWrap to={ROUTES.HOME}>
      <Logo {...restProps} />
      <LogoText>bottl.</LogoText>
    </LogoWrap>
  );
};

Header.ButtonLink = function HeaderButtonLnk({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  );
};

Header.ButtonsContainer = function HeaderButtonsContainer({ children, ...restProps }) {
  return (
    <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
  );
};

Header.Anchor = function HeaderAnchor({ children, ...restProps }) {
  return (
    <Anchor {...restProps}>{children}</Anchor>
  );
};
