import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameStateProvider } from "./helpers/GameStateProvider";
import { ScoreProvider } from "./helpers/ScoreProvider";
import {TimerProvider} from './helpers/TimerProvider';

ReactDOM.render(
  <GameStateProvider>
    <ScoreProvider>
      <TimerProvider>
      <App />
      </TimerProvider>
    </ScoreProvider>
  </GameStateProvider>,
  document.getElementById("root")
);
