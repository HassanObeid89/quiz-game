//Project files
import { useGameState } from "./helpers/GameStateProvider";
import WelcomeScreen from "./pages/WelcomeScreen";
import QuizScreen from "./pages/QuizScreen";
import ResultScreen from "./pages/ResultScreen";
import './css/styles.css'
export default function App() {
  //Global State
  const { gameState } = useGameState();

  return (
    <div className="App">
      {gameState === "welcomeScreen" && <WelcomeScreen />}
      {gameState === "playing" && <QuizScreen />}
      {gameState === "finished" && <ResultScreen />}
    </div>
  );
}
