import { useState, useEffect } from "react";
import { useGameState } from "../helpers/GameStateProvider";
import { useScore } from "../helpers/ScoreProvider";
export default function DownTimer({ question }) {
  const { setGameState } = useGameState();
  const { unAnswered, setUnanswered } = useScore();
  const [currentQuestion, setCurrentQuestion] = question;
  const [remainingTime, setRemainingTime] = useState(15);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [updateRemainingTime]);

  function updateRemainingTime() {
    remainingTime > 0 ? onCountDown() : onReset();
  }

  function onCountDown() {
    setRemainingTime(remainingTime - 1);
  }

  function onReset() {
    setRemainingTime(15);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10
      ? setCurrentQuestion(nextQuestion)
      : setGameState("finished");
    setUnanswered(unAnswered + 1);
  }

  return <div>{remainingTime}</div>;
}
