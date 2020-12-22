import React from "react";
import jumbotronData from "./fixtures/jumbotron.json";
import Jumbo from "./components/jumbo";

export default function App() {
  return (
    <Jumbo.Container>
      {jumbotronData.map((item) => (
        <Jumbo key={item.id} direction={item.direction}>
          <Jumbo.Pane>
            <Jumbo.Title>{item.title}</Jumbo.Title>
            <Jumbo.SubTitle>{item.subTitle}</Jumbo.SubTitle>
          </Jumbo.Pane>
          <Jumbo.Pane>
            <Jumbo.Image src={item.image} alt={item.alt} />
          </Jumbo.Pane>
        </Jumbo>
      ))}
    </Jumbo.Container>
  );
}
