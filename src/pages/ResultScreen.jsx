//Project files
import { useScore } from "../helpers/ScoreProvider";

export default function ResultScreen() {

  //Global State
  const { score } = useScore();

  return (
    <div>
      <h1>Quiz Finished!</h1>
      <p>Your Score is {score} out if 10</p>
    </div>
  );
}
