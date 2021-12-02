// NPM package
import { createContext, useContext, useState } from "react";

// Properties
const QuestionContext = createContext("");

export function QuestionProvider({ children }) {
  // Local state
  const [modifiedQuestion, setQuestion] = useState([]);
  
  
  return (
    <QuestionContext.Provider value={{ modifiedQuestion, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestion() {
  const context = useContext(QuestionContext);

  return context;
}
