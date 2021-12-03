// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import questionReducer from "./questionReducer";

// Properties
const questionContext = createContext(null);

export function QuestionsProvider({ children }) {
  // Local state
  const [randomArray, dispatchRandomArray] = useReducer(questionReducer, []);

  return (
    <questionContext.Provider
      value={{
        randomArray: randomArray,
        dispatchRandomArray: dispatchRandomArray,
      }}
    >
      {children}
    </questionContext.Provider>
  );
}

export function useRandonArray() {
  return useContext(questionContext);
}
