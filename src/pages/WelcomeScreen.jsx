//Project files
import { useGameState } from "../helpers/GameStateProvider";
export default function WelcomeScreen() {
  //Global State
  const { setGameState } = useGameState();
  return (
    <div>
      <h1>Welcome page</h1>
      <button onClick={()=>setGameState('playing')}>Start Game</button>
    </div>
  );
}
