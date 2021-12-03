// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const FiftyContext = createContext("");

export function FifityAnswersProvider({ children }) {
  // Local state
  const [modifiedAnswers, setAnswers] = useState([]);

  return (
    <FiftyContext.Provider value={{ modifiedAnswers, setAnswers }}>
      {children}
    </FiftyContext.Provider>
  );
}

export function useFifty() {
  const context = useContext(FiftyContext);

  return context;
}
