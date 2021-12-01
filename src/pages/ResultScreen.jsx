//Project files
import { useScore } from "../helpers/ScoreProvider";

export default function ResultScreen() {

  //Global State
  const { score, inCorrect } = useScore();

  return (
    <div>
      <h1>Quiz Finished!</h1>
      <p>Correct Answers: {score}</p>
      <p>Incorrect Answers: {inCorrect}</p>
      <p>Your Score is {score} out of 10</p>
    </div>
  );
}
