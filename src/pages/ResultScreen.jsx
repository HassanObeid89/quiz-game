//Project files
import { useScore } from "../helpers/ScoreProvider";
import { useGameState } from "../helpers/GameStateProvider";

export default function ResultScreen() {

  //Global State
  const { score, inCorrect, unAnswered } = useScore();
  const { setGameState } = useGameState();
  return (
    <div>
      <h1>Quiz Finished!</h1>
      <p>Correct Answers: {score}</p>
      <p>Incorrect Answers: {inCorrect}</p>
      <p>unAnswered: {unAnswered}</p>
      <p>Your Score is {score} out of 10</p>
      <button onClick={()=>setGameState('welcomeScreen')}>Restart Game</button>
    </div>
  );
}
