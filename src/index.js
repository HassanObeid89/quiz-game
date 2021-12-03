import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameStateProvider } from "./helpers/GameStateProvider";
import { QuestionProvider } from "./helpers/QuestionProvider";
import { QuestionsProvider } from "./helpers/QuestionsProvider";
import { ScoreProvider } from "./helpers/ScoreProvider";
import {TimerProvider} from './helpers/TimerProvider';

ReactDOM.render(
  <GameStateProvider>
    <ScoreProvider>
      <TimerProvider>
        <QuestionProvider>
          <QuestionsProvider>
      <App />
      </QuestionsProvider>
      </QuestionProvider>
      </TimerProvider>
    </ScoreProvider>
  </GameStateProvider>,
  document.getElementById("root")
);
