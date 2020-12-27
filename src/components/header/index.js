import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

<<<<<<< HEAD
import {
  Background,
  Logo,
  Container,
  Button,
  Feature,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
} from "./styles/header";
=======
import { Background, Logo, Container, Button } from "./styles/header";
>>>>>>> 98e5613604ea62f3dda79350f3971a1c90b886ed

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

<<<<<<< HEAD
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

=======
>>>>>>> 98e5613604ea62f3dda79350f3971a1c90b886ed
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

<<<<<<< HEAD
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

=======
>>>>>>> 98e5613604ea62f3dda79350f3971a1c90b886ed
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
