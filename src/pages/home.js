import React from "react";
import { HeaderContainer } from "../containers/header";

import { AccordionContainer } from "../containers/accordions";
import { FooterContiner } from "../containers/footer";
import { JumboContainer } from "../containers/jumbotron";
import { Form, Feature } from "../components";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <Form>
            <Form.Input placeholder="Email Address" />
            <Form.Button>Try it now</Form.Button>
            <Form.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </Form.Text>
          </Form>
        </Feature>
      </HeaderContainer>
      <JumboContainer />
      <AccordionContainer />
      <FooterContiner />
    </>
  );
}
