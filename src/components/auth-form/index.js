import React from "react";
import {
  Container,
  Base,
  Input,
  Submit,
  Text,
  TextSmall,
  Link,
  Error,
  Title,
} from "./styles/auth-form";

export default function AuthForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AuthForm.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

AuthForm.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

AuthForm.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

AuthForm.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

AuthForm.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

AuthForm.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

AuthForm.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

AuthForm.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
