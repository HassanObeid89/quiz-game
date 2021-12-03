import { useEffect, useCallback } from "react";
import { useGameState } from "../helpers/GameStateProvider";
import { useScore } from "../helpers/ScoreProvider";
import { useTimer } from "../helpers/TimerProvider";
export default function DownTimer({ question }) {
  const { setGameState } = useGameState();
  const { unAnswered, setUnanswered } = useScore();
  const [currentQuestion, setCurrentQuestion] = question;
  const { remainingTime, setRemainingTime } = useTimer();

  const onCountDown = useCallback(async () => {
    await setRemainingTime(remainingTime - 1);
  }, [remainingTime, setRemainingTime]);

  const onReset = useCallback(async () => {
    await setRemainingTime(15);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10
      ? setCurrentQuestion(nextQuestion)
      : setGameState("finished");
    setUnanswered(unAnswered + 1);
  }, [
    currentQuestion,
    setCurrentQuestion,
    setGameState,
    setRemainingTime,
    setUnanswered,
    unAnswered,
  ]);

  const updateRemainingTime = useCallback(() => {
    remainingTime > 0 ? onCountDown() : onReset();
  }, [onCountDown, onReset, remainingTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [updateRemainingTime]);

  return <div className="timer">{remainingTime}</div>;
}
