//NPM Package
import { useState } from "react";

//Project files
import questions from "../data/questions.json";

export default function QuizScreen() {
  //Local state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  //Methods
  function onAnswer() {
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10 ? setCurrentQuestion(nextQuestion):alert("finished");
  }

  //properties
  const answer = questions[currentQuestion].answers.map(
    (answerOption, index) => (
      <button key={index} onClick={onAnswer}>
        {answerOption.option}
      </button>
    )
  );

  return (
    <div>
      <h1>Quiz page</h1>
      {questions[currentQuestion].text}
      <section>{answer}</section>
    </div>
  );
}
