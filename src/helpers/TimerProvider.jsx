// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const TimerContext = createContext("");

export function TimerProvider({ children }) {
  // Local state
  const [remainingTime, setRemainingTime] = useState(15);

  return (
    <TimerContext.Provider
      value={{
        remainingTime,
        setRemainingTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);

  return context;
}
