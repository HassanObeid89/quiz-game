import { useState } from "react";
import questions from "../data/questions.json";
import { useFifty } from "../helpers/FifityAnswersProvider";

export default function FiftyLifeLine({ currentQuestion, setIsUsed }) {
  const { setAnswers } = useFifty();
  const [newArr, setNewArr] = useState([]);
  const [disabled, setDisabled] = useState(false);

  //properties
  const randon = questions[currentQuestion].answers.filter(
    (answerOption) => answerOption.isCorrect === false
  );

  const correctAnswer = questions[currentQuestion].answers.filter(
    (answerOption) => answerOption.isCorrect === true
  );

  //Methods
  function onFiftyFifty() {
    let randomIndex = Math.floor(Math.random() * 3);
    
    setNewArr([...newArr, randon[randomIndex], ...correctAnswer]);
    setAnswers([randon[randomIndex], ...correctAnswer]);
    setIsUsed(true);
    setDisabled(true);
  }

  return (
    <button disabled={disabled} onClick={onFiftyFifty}>
      50/50
    </button>
  );
}
