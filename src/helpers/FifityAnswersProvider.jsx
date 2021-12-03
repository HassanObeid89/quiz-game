// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const FiftyContext = createContext("");

export function FifityAnswersProvider({ children }) {
  // Local state
  const [modifiedQuestion, setQuestion] = useState([]);
  
  
  return (
    <FiftyContext.Provider value={{ modifiedQuestion, setQuestion }}>
      {children}
    </FiftyContext.Provider>
  );
}

export function useFifty() {
  const context = useContext(FiftyContext);

  return context;
}
