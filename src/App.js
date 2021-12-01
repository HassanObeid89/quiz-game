//Project files
import { useGameState } from "./helpers/GameStateProvider";
import WelcomeScreen from "./pages/WelcomeScreen";
import QuizScreen from "./pages/QuizScreen";
import ResultScreen from "./pages/ResultScreen";

export default function App() {
  //Global State
  const { gameState } = useGameState();
console.log(gameState)
  return (
    <div className="App">
      {gameState === "welcomeScreen" && <WelcomeScreen />}
      {gameState === "playing" && <QuizScreen />}
      {gameState === "finished" && <ResultScreen />}
    </div>
  );
}
