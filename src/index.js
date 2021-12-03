import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameStateProvider } from "./helpers/GameStateProvider";
import { FifityAnswersProvider } from "./helpers/FifityAnswersProvider";
import { QuestionsProvider } from "./helpers/QuestionsProvider";
import { ScoreProvider } from "./helpers/ScoreProvider";
import { TimerProvider } from "./helpers/TimerProvider";

ReactDOM.render(
  <GameStateProvider>
    <ScoreProvider>
      <TimerProvider>
        <FifityAnswersProvider>
          <QuestionsProvider>
            <App />
          </QuestionsProvider>
        </FifityAnswersProvider>
      </TimerProvider>
    </ScoreProvider>
  </GameStateProvider>,
  document.getElementById("root")
);
