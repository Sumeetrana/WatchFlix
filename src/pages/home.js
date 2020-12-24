import React from "react";
import { AccordionContainer } from "../containers/accordions";
import { FooterContiner } from "../containers/footer";
import { JumboContainer } from "../containers/jumbotron";
export default function Home() {
  return (
    <>
      <JumboContainer />
      <AccordionContainer />
      <FooterContiner />
    </>
  );
}
