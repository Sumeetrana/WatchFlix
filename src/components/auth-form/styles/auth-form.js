import styled from "styled-components/macro";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div``;
export const Error = styled.div``;
export const Base = styled.div``;
export const Title = styled.h1``;
export const Text = styled.p``;
export const TextSmall = styled.p``;
export const Link = styled(RouterLink)`
  color: white;
  tex-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input``;

export const Submit = styled.button``;
