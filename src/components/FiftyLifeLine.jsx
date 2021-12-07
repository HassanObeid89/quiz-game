import { useState } from "react";
import questions from "../data/questions.json";
import { useFifty } from "../helpers/FifityAnswersProvider";

export default function FiftyLifeLine({ currentQuestion, setIsUsed }) {
  const { setAnswers } = useFifty();
  const [disabled, setDisabled] = useState(false);

  //properties
  const random = questions[currentQuestion].answers.filter(
    (answerOption) => answerOption.isCorrect === false
  );

  const correctAnswer = questions[currentQuestion].answers.filter(
    (answerOption) => answerOption.isCorrect === true
  );

  //Methods
  function onFiftyFifty() {
    let randomIndex = Math.floor(Math.random() * 3);
    
    setAnswers([random[randomIndex], ...correctAnswer]);
    setIsUsed(true);
    setDisabled(true);
  }

  return (
    <button disabled={disabled} onClick={onFiftyFifty}>
      50/50
    </button>
  );
}
