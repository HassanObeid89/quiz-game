// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const GameStateContext = createContext("");

export function GameStateProvider({ children }) {
  // Local state
  const [gameState, setGameState] = useState("welcomeScreen");
  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);

  return context;
}
