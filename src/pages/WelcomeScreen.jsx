//Project files
import { useGameState } from "../helpers/GameStateProvider";

export default function WelcomeScreen() {
  //Global State
  const { setGameState } = useGameState();

  return (
    <div>
      <h1>Are you ready to test your JavaScript skills?</h1>
      <ul>
        <li>You will have only 15 seconds per each question</li>
        <li>You can use once those two options 'delete two wrong answers' & 'add more 10 seconds'</li>
      </ul>
      <button onClick={() => setGameState("playing")}>Start Game</button>
    </div>
  );
}
