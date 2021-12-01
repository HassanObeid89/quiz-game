import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {GameStateProvider} from './helpers/GameStateProvider'
ReactDOM.render(
  <GameStateProvider >
    <App />
  </GameStateProvider>,
  document.getElementById("root")
);
