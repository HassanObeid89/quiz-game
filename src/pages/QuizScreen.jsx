//NPM Package
import { useState } from "react";

//Project files
import questions from "../data/questions.json";

export default function QuizScreen() {
  //Local state
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //properties
  const answer = questions[currentQuestion].answers.map(
    (answerOption, index) => (
      <button
        key={index}
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
      >
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
