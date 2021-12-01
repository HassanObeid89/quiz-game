//NPM Package
import { useState } from "react";

//Project files
import { useGameState } from "../helpers/GameStateProvider";
import questions from "../data/questions.json";
import { useScore } from "../helpers/ScoreProvider";

export default function QuizScreen() {
  //Global State
  const { setGameState } = useGameState();
  const { score, setScore } = useScore();
  
  //Local state
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Methods
  function onAnswer(isCorrect) {
    if (isCorrect == true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10
      ? setCurrentQuestion(nextQuestion)
      : setGameState("finished");
  }

  //properties
  const answer = questions[currentQuestion].answers.map(
    (answerOption, index) => (
      <button key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
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
