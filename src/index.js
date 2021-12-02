import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameStateProvider } from "./helpers/GameStateProvider";
import { QuestionProvider } from "./helpers/QuestionProvider";
import { ScoreProvider } from "./helpers/ScoreProvider";
import {TimerProvider} from './helpers/TimerProvider';

ReactDOM.render(
  <GameStateProvider>
    <ScoreProvider>
      <TimerProvider>
        <QuestionProvider>
      <App />
      </QuestionProvider>
      </TimerProvider>
    </ScoreProvider>
  </GameStateProvider>,
  document.getElementById("root")
);
