// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const ScoreContext = createContext("");

export function ScoreProvider({ children }) {
  // Local state
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);

  return context;
}
