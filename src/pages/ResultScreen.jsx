//Project files
import { useScore } from "../helpers/ScoreProvider";
import { useGameState } from "../helpers/GameStateProvider";

export default function ResultScreen() {
  //Global State
  const {
    score,
    setScore,
    inCorrect,
    setInCorrect,
    unAnswered,
    setUnanswered,
  } = useScore();

  const { setGameState } = useGameState();
  function onRestart() {
    setGameState("welcomeScreen");
    setInCorrect(0);
    setScore(0);
    setUnanswered(0);
  }
  return (
    <div className="welcome_wrapper">
      <h1>Quiz Finished!</h1>
      <p>Correct Answers: {score}</p>
      <p>Incorrect Answers: {inCorrect}</p>
      <p>unAnswered: {unAnswered}</p>
      <p>Your Score is {score} out of 10</p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}
