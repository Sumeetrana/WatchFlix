import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from ".././logo.png";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="WatchFlix" src={logo} />
        <Header.Button>Signin</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
