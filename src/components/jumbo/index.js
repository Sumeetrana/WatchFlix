import React from "react";
import {
  Inner,
  Container,
  Item,
  Pane,
  Image,
  Title,
  SubTitle,
} from "./styles/jumbo";

export default function Jumbo({ children, direction = "row", ...restProps }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbo.Container = function JumboContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbo.Pane = function JumboPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbo.Title = function JumboTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbo.SubTitle = function JumboSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbo.Image = function JumboImage({ ...restProps }) {
  return <Image {...restProps} />;
};
