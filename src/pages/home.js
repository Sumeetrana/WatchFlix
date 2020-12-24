import React from "react";
import { HeaderContainer } from "../containers/header";
import { AccordionContainer } from "../containers/accordions";
import { FooterContiner } from "../containers/footer";
import { JumboContainer } from "../containers/jumbotron";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <JumboContainer />
        <AccordionContainer />
        <FooterContiner />
      </HeaderContainer>
    </>
  );
}
