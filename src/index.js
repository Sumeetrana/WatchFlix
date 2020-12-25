import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import {firebase} from "./lib/firebase.prod";
import App from "./app";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
