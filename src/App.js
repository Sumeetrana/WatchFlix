import React from "react";
import { AccordionContainer } from "./containers/accordions";
import { FooterContiner } from "./containers/footer";
import { JumboContainer } from "./containers/jumbotron";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumboContainer />
        <AccordionContainer />
        <FooterContiner />
      </Route>
    </Router>
  );
}
