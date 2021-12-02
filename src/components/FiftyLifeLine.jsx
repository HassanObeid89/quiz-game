import { useState } from "react";
import questions from "../data/questions.json";
import { useQuestion } from "../helpers/QuestionProvider";

export default function FiftyLifeLine({ currentQuestion, setIsUsed, isUsed }) {
  const { setQuestion } = useQuestion();
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
  function hassan() {
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    setNewArr([...newArr, randon[randomIndex], ...correctAnswer]);
    setQuestion([randon[randomIndex], ...correctAnswer]);
    setIsUsed(true);
    setDisabled(true);
  }

  return (
    <button disabled={disabled} onClick={hassan}>
      50/50
    </button>
  );
}
