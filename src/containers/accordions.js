import React from "react";
import faqData from "../fixtures/faqs.json";
import { Accordion, Form } from "../components";

export function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <Form>
        <Form.Input placeholder="Email Address" />
        <Form.Button>Try it now</Form.Button>
        <Form.Text>
          Ready to watch? Enter your email to create or restart your membership
        </Form.Text>
      </Form>
    </Accordion>
  );
}
