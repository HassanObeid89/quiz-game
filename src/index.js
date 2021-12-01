import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameStateProvider } from "./helpers/GameStateProvider";
import { ScoreProvider } from "./helpers/ScoreProvider";

ReactDOM.render(
  <GameStateProvider>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </GameStateProvider>,
  document.getElementById("root")
);
